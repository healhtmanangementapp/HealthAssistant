/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, main, vh, vw} from '../../services/styleSheets';
import useStatusBar from '../../services/useStatusBar';
import {backIcon, doubleSaveIcon} from '../../assets/svgXml';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  additionListTask,
  currentListTaskData,
  getCurrentDayOfWeekAndDate,
  getCurrentMonthAndDate,
} from '../../services/renderData';
import {
  CuztomizeMainProps,
  TabRenderListProps,
  TaskProps,
} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';

const Customize = () => {
  useStatusBar('#EAECF5');
  const [currentTask, setCurrentTask] = useState<TaskProps[]>([]);
  const [additionTask, setAdditionTask] = useState<TaskProps[]>([]);
  const [cancelTasks, setCancelTasks] = useState<number[]>([]);
  const [moveTasks, setMoveTasks] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState<'current' | 'list'>('current');

  const fetchAddtionTask = async () => {
    await loadData<TaskProps[]>(
      `AdditionTasksStorage${getCurrentMonthAndDate()}`,
    )
      .then(data => {
        setAdditionTask(data);
      })
      .catch(() => {
        saveData(
          `AdditionTasksStorage${getCurrentMonthAndDate()}`,
          additionListTask,
        );
        setAdditionTask(additionListTask);
      });
  };

  const fetchData = async () => {
    await loadData<TaskProps[]>(`TasksStorage${getCurrentMonthAndDate()}`)
      .then(data => {
        setCurrentTask(data);
      })
      .catch(() => {
        saveData(
          `TasksStorage${getCurrentMonthAndDate()}`,
          currentListTaskData,
        );
        setCurrentTask(currentListTaskData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      fetchAddtionTask();
    }, []),
  );

  const isSaveButtonDisabled = () => {
    if (selectedTab === 'current') {
      return cancelTasks.length === 0;
    } else if (selectedTab === 'list') {
      return moveTasks.length === 0;
    }
    return true;
  };
  const handleSave = () => {
    if (selectedTab === 'current') {
      const newCurrentTask = currentTask.filter(
        (_, index) => !cancelTasks.includes(index),
      );
      const canceledTasks = currentTask.filter((_, index) =>
        cancelTasks.includes(index),
      );
      const newAdditionTask = [...additionTask, ...canceledTasks];

      setCurrentTask(newCurrentTask);
      setAdditionTask(newAdditionTask);
      saveData(`TasksStorage${getCurrentMonthAndDate()}`, newCurrentTask);
      saveData(
        `AdditionTasksStorage${getCurrentMonthAndDate()}`,
        newAdditionTask,
      );
      setCancelTasks([]);
    } else if (selectedTab === 'list') {
      const newAdditionTask = additionTask.filter(
        (_, index) => !moveTasks.includes(index),
      );
      const movedTasks = additionTask.filter((_, index) =>
        moveTasks.includes(index),
      );
      const newCurrentTask = [...currentTask, ...movedTasks];

      setAdditionTask(newAdditionTask);
      setCurrentTask(newCurrentTask);
      saveData(
        `AdditionTasksStorage${getCurrentMonthAndDate()}`,
        newAdditionTask,
      );
      saveData(`TasksStorage${getCurrentMonthAndDate()}`, newCurrentTask);
      setMoveTasks([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5), marginBottom: vh(2)}}>
          <Header />
          <MainContent
            additionTask={additionTask}
            setAdditionTask={setAdditionTask}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            cancelTasks={cancelTasks}
            setCancelTasks={setCancelTasks}
            moveTasks={moveTasks}
            setMoveTasks={setMoveTasks}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </View>
      </ScrollView>
      <View style={styles.btnSaveContainer}>
        <TouchableOpacity
          onPress={() => handleSave()}
          disabled={isSaveButtonDisabled()}
          style={[
            isSaveButtonDisabled() ? styles.btnSave : styles.btnSaveActive,
            centerAll,
          ]}>
          {doubleSaveIcon(
            vw(6),
            vw(6),
            isSaveButtonDisabled() ? '#98A2B3' : '#FCFCFD',
          )}
          <Text
            style={[
              isSaveButtonDisabled()
                ? styles.btnSaveText
                : styles.btnSaveTextActive,
            ]}>
            {' '}
            Save changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const MainContent: React.FC<CuztomizeMainProps> = ({
  currentTask,
  additionTask,
  cancelTasks,
  setCancelTasks,
  moveTasks,
  setMoveTasks,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'current' && styles.selectedTab]}
          onPress={() => setSelectedTab('current')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'current' && styles.tabActiveText,
            ]}>
            Current tasks({currentTask.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'list' && styles.selectedTab]}
          onPress={() => setSelectedTab('list')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'list' && styles.tabActiveText,
            ]}>
            On your list({additionTask.length})
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {selectedTab === 'current' ? (
          <View>
            <Text style={styles.mainCountText}>
              Cancel ( {cancelTasks.length} ) task
            </Text>
            <TabRender
              data={currentTask}
              setCount={setCancelTasks}
              count={cancelTasks}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.mainCountText}>
              Move ( {moveTasks.length} ) to your tasks
            </Text>
            <TabRender
              data={additionTask}
              setCount={setMoveTasks}
              count={moveTasks}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const TabRender: React.FC<TabRenderListProps> = ({data, setCount, count}) => {
  const handleCount = (index: number) => {
    setCount(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <View style={{rowGap: vh(2), marginTop: vh(2)}}>
      {data.map((item, index) => {
        const isSelected = count.includes(index);
        return (
          <View key={index} style={styles.tabRenderContainer}>
            <View style={styles.tabLeftGroup}>
              <Image source={item.img} style={styles.tabLeftImg} />
              <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.tabTitle}>{item.title}</Text>
                <Text style={styles.tabDes}>{item.description}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleCount(index)}
              style={[
                styles.tabBtn,
                isSelected && styles.tabBtnSelected,
                centerAll,
              ]}>
              {isSelected && <View style={styles.tabBtnInnerCircle} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {backIcon(vw(6), vw(6))}
      </TouchableOpacity>
      <View style={centerAll}>
        <Text style={{color: '#344054', fontSize: 20, fontWeight: '600'}}>
          Customize
        </Text>
        <Text style={{color: '#98A2B3', fontSize: 14, fontWeight: '600'}}>
          {getCurrentDayOfWeekAndDate()}
        </Text>
      </View>
      <View>{doubleSaveIcon(vw(6), vw(6))}</View>
    </View>
  );
};

export default Customize;

const styles = StyleSheet.create({
  container: main,
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(2),
  },
  mainContainer: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderBottomColor: '#667085',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    borderBottomColor: '#2D31A6',
  },
  tabText: {
    fontSize: 16,
    color: '#667085',
    fontWeight: '400',
  },
  tabActiveText: {
    fontSize: 16,
    color: '#2D31A6',
    fontWeight: '600',
  },
  content: {
    marginTop: vh(2),
  },
  mainCountText: {
    color: '#444CE7',
    fontSize: 14,
    fontWeight: '600',
  },
  tabRenderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(3),
    paddingVertical: vh(1),
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E4E7EC',
  },
  tabLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: vw(2),
  },
  tabLeftImg: {
    width: vw(12),
    height: vw(12),
    resizeMode: 'contain',
  },
  tabTitle: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  tabDes: {
    color: '#3538CD',
    fontSize: 14,
    fontWeight: '400',
  },
  tabBtn: {
    width: vw(8),
    height: vw(8),
    borderRadius: vw(25),
    borderColor: '#717BBC',
    borderWidth: 2,
  },
  tabBtnSelected: {
    backgroundColor: '#363F72',
    borderColor: '#363F72',
  },
  tabBtnInnerCircle: {
    width: vw(3),
    height: vw(3),
    borderRadius: vw(2),
    backgroundColor: 'white',
  },
  btnSaveContainer: {
    backgroundColor: 'white',
    paddingVertical: vh(2),
    paddingHorizontal: vw(5),
  },
  btnSaveActive: {
    backgroundColor: '#444CE7',
    paddingVertical: vh(1.5),
    borderRadius: 8,
    flexDirection: 'row',
  },
  btnSave: {
    borderColor: '#98A2B3',
    borderWidth: 1,
    paddingVertical: vh(1.5),
    borderRadius: 8,
    flexDirection: 'row',
  },
  btnSaveTextActive: {
    color: '#FCFCFD',
    fontSize: 16,
  },
  btnSaveText: {
    color: '#98A2B3',
    fontSize: 16,
  },
});
