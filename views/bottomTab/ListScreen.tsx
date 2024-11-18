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
import {centerAll, main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  currentListTaskData,
  futureListTaskData,
  getCurrentMonthAndDate,
  getMonthYearHomeChart,
  getWeekDays,
  pastListTaskData,
} from '../../services/renderData';
import {Picker} from '@react-native-picker/picker';
import useStatusBar from '../../services/useStatusBar';
import {
  ListScreenDateProps,
  ListScreenMainProps,
  TaskProps,
} from '../../services/typeProps';
import {completeIcon, taskModifierIcon} from '../../assets/svgXml';
import ListTaskComponent from '../../components/list/ListTaskComponent';
import {loadData, saveData} from '../../services/storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ListScreen = () => {
  useStatusBar('#EAECF5');
  const today = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<number>(today);
  const [selectedMonth, setSelectedMonth] = useState('current');
  const [renderData, setRenderData] = useState<TaskProps[]>([]);

  const handleDateChange = (dayDate: number) => {
    if (dayDate === selectedDate) {
      return; // If the selected date is the same as the previous one, do nothing
    }

    setSelectedDate(dayDate);
  };

  const fetchData = async () => {
    await loadData<TaskProps[]>(`TasksStorage${getCurrentMonthAndDate()}`)
      .then(data => {
        setRenderData(data);
      })
      .catch(() => {
        saveData(
          `TasksStorage${getCurrentMonthAndDate()}`,
          currentListTaskData,
        );
        setRenderData(currentListTaskData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: vh(2)}}>
          <DateTimeRender
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
          <Main
            selectedDate={selectedDate}
            selectedMonth={selectedMonth}
            isChangeable={
              selectedMonth === 'current' &&
              selectedDate >= today &&
              selectedDate - today < 4
            }
            renderData={renderData}
            setChange={setRenderData}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC<ListScreenMainProps> = ({
  isChangeable,
  selectedDate,
  renderData,
  setChange,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const today = new Date().getDate();
  const isModifiable = selectedDate === today;
  const numberOfFinishedTasks = renderData.filter(
    item => item.isCompleted,
  ).length;

  const handleCompleteTask = (index: number) => {
    const newRenderData = [...renderData];
    newRenderData[index].isCompleted = true;
    saveData(`TasksStorage${getCurrentMonthAndDate()}`, newRenderData);
    setChange(newRenderData);
  };

  const renderView = () => {
    if (isChangeable) {
      if (isModifiable) {
        return (
          <View>
            <Text style={{color: '#444CE7', fontSize: 14, fontWeight: '600'}}>
              {numberOfFinishedTasks} of {renderData.length} completed
            </Text>
            <View style={{rowGap: vh(2), marginVertical: vh(2)}}>
              {renderData.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={
                      renderData[index].isCompleted
                        ? styles.taskCompleteContainer
                        : styles.taskContainer
                    }>
                    <View style={{flexDirection: 'row', columnGap: vw(2)}}>
                      <Image source={item.img} style={styles.img} />
                      <View style={{justifyContent: 'space-between'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                    {renderData[index].isCompleted ? (
                      <View style={[centerAll, styles.completeContainer]}>
                        {completeIcon(vw(6), vw(6))}
                        <Text style={styles.completeTxt}>Complete</Text>
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={() => handleCompleteTask(index)}
                        style={[styles.markAsCompleteContainer, centerAll]}>
                        <Text style={styles.markAsCompleteTxt}>
                          Mark as Complete
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        );
      }
      return <ListTaskComponent data={futureListTaskData} />;
    } else {
      return <ListTaskComponent data={pastListTaskData} />;
    }
  };

  const handleModifyTask = () => {
    navigation.navigate('Customize');
  };

  return (
    <View style={{paddingHorizontal: vw(5), marginTop: vh(2)}}>
      <View style={{rowGap: vh(1)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#1D2939'}}>
            Star your day
          </Text>
          {isChangeable ? (
            <TouchableOpacity
              onPress={() => handleModifyTask()}
              disabled={!isModifiable}>
              {taskModifierIcon(vw(7), vw(7))}
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View>
        <View>{renderView()}</View>
      </View>
    </View>
  );
};

const DateTimeRender: React.FC<ListScreenDateProps> = ({
  selectedDate,
  handleDateChange,
  selectedMonth,
  setSelectedMonth,
}) => {
  const today = new Date().getDate();

  return (
    <View style={{paddingHorizontal: vw(5)}}>
      <Picker
        dropdownIconColor={'#6E778B'}
        selectedValue={selectedMonth}
        style={{
          width: vw(34),
          color: '#272727',
        }}
        onValueChange={itemValue => setSelectedMonth(itemValue)}>
        <Picker.Item label={getMonthYearHomeChart(0)} value="current" />
        <Picker.Item label={getMonthYearHomeChart(-1)} value="previous1" />
        <Picker.Item label={getMonthYearHomeChart(-2)} value="previous2" />
        <Picker.Item label={getMonthYearHomeChart(-3)} value="previous3" />
      </Picker>

      <View style={[styles.dateContainer]}>
        {getWeekDays(selectedMonth).map((day, index) => {
          const dayDate = parseInt(day.date, 10);
          const isToday = dayDate === today;
          const isSelected = dayDate === selectedDate;
          const isPast = dayDate < today;

          return (
            <TouchableOpacity
              key={index}
              style={styles.dateTxtContainer}
              onPress={() => handleDateChange(dayDate)}>
              <Text style={[styles.dateofWeek, isToday && {color: '#444CE7'}]}>
                {day.dayOfWeek}
              </Text>
              <View
                style={[
                  styles.dateCircle,
                  isToday && !isSelected && styles.todayCircle,
                  isSelected && styles.selectedCircle,
                  isToday && isSelected && {backgroundColor: '#4E5BA6'},
                ]}>
                <Text
                  style={[
                    styles.datetime,
                    isToday && !isSelected && styles.todayText,
                    isSelected && styles.selectedText,
                    !isToday && !isSelected && styles.defaultText,
                    isPast && !isSelected && {color: '#B0B7C3'},
                  ]}>
                  {day.date}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: main,
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: vh(2),
    borderTopWidth: 1,
    borderTopColor: '#E4E7EC',
    borderBottomColor: '#E4E7EC',
    borderBottomWidth: 1,
  },
  dateofWeek: {
    color: '#1D2939',
    fontSize: 12,
    fontWeight: '400',
  },
  datetime: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateTxtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: vh(0.5),
  },
  todayText: {
    color: '#444CE7',
  },
  selectedText: {
    color: '#FCFCFD',
  },
  defaultText: {
    color: '#344054',
  },
  dateCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayCircle: {
    backgroundColor: 'transparent',
  },
  selectedCircle: {
    backgroundColor: '#98A2B3',
    borderRadius: vw(30),
  },
  taskCompleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEF4FF',
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
    borderRadius: 12,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#A4BCFD',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E4E7EC',
  },
  img: {
    width: vw(12),
    height: vw(12),
    resizeMode: 'contain',
  },
  title: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#3538CD',
    fontSize: 14,
    fontWeight: '400',
  },
  completeTxt: {
    color: '#039855',
    fontSize: 12,
    fontWeight: '500',
  },
  completeContainer: {
    backgroundColor: '#E5F7F0',
    borderRadius: vw(2),
    paddingHorizontal: vw(3),
  },
  markAsCompleteContainer: {
    width: vw(20),
    borderRadius: 6,
    borderColor: '#E4E7EC',
    borderWidth: 2,
  },
  markAsCompleteTxt: {
    textAlign: 'center',
    color: '#98A2B3',
    fontSize: 12,
    fontWeight: '400',
  },
});
