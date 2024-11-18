/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {HomeLearnMoreData} from '../../services/renderData';
import {backIcon, doubleSaveIcon, plusIcon} from '../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LearnMoreData} from '../../services/typeProps';

type DetailRouteParams = {
  Detail: {
    dataIndex: number;
  };
};

const Detail = () => {
  const route = useRoute<RouteProp<DetailRouteParams, 'Detail'>>();
  const {dataIndex} = route.params;
  const renderData: LearnMoreData = HomeLearnMoreData[dataIndex];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header />
        <MainContent data={renderData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC<{data: LearnMoreData}> = ({data}) => {
  const [activeTab, setActiveTab] = useState<'Foods' | 'Exercises'>('Foods');

  return (
    <View style={{paddingHorizontal: vw(5)}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.label}>{data.disease}</Text>
          <Image source={data.img} />
        </View>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <View>
        <Text style={{color: '#1D2939', fontWeight: '600'}}>
          Dos and Don'ts for Prevention
        </Text>
        <View style={styles.section}>
          <Text style={styles.doText}>
            <Text style={styles.dot}>• </Text>
            Do: <Text style={styles.doContent}>{data.thingsToDo}</Text>
          </Text>
          <Text style={styles.dontText}>
            <Text style={styles.dot}>• </Text>
            Don't: <Text style={styles.dontContent}>{data.thingsNotToDo}</Text>
          </Text>
        </View>
      </View>
      <View style={{marginVertical: vh(2)}}>
        <Text style={styles.recommendTxt}>Recommend activities</Text>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Foods' && styles.activeTab]}
          onPress={() => setActiveTab('Foods')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Foods' && styles.activeTabText,
            ]}>
            Foods to Eat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Exercises' && styles.activeTab]}
          onPress={() => setActiveTab('Exercises')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Exercises' && styles.activeTabText,
            ]}>
            Exercises
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Foods' ? (
        <View style={styles.contentContainer}>
          {data.foodsToEat.map((food, index) => (
            <View key={index} style={styles.itemContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  columnGap: vw(2),
                }}>
                <Image resizeMode="contain" source={food.img} />
                <View
                  style={{
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <Text style={styles.itemTitle}>{food.title}</Text>
                  <Text style={styles.itemSubtitle}>{food.subTitle}</Text>
                  <Text style={styles.itemValue}>{food.value}</Text>
                </View>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    borderRadius: vw(20),
                    backgroundColor: '#E0EAFF',
                    padding: vh(1),
                    alignSelf: 'flex-start',
                  }}>
                  {plusIcon(vw(5), vw(5))}
                </TouchableOpacity>
              </View>
              <Text style={styles.itemDescription}>{food.description}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.contentContainer}>
          {data.excercise.map((exercise, index) => (
            <View key={index} style={styles.itemContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.imgGrp}>
                  <Image resizeMode="contain" source={exercise.img} />
                  <View>
                    <Text style={styles.itemTitle}>{exercise.title}</Text>
                    <Text style={styles.itemSubtitle}>{exercise.subTitle}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    borderRadius: vw(20),
                    backgroundColor: '#E0EAFF',
                    padding: vh(1),
                    alignSelf: 'flex-start',
                  }}>
                  {plusIcon(vw(5), vw(5))}
                </TouchableOpacity>
              </View>
              <Text style={styles.itemDescription}>{exercise.description}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: vw(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vh(2),
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {backIcon(vw(7), vw(7))}
      </TouchableOpacity>
      <Text style={styles.headerTxt}>Detail</Text>
      <View>{doubleSaveIcon(vw(7), vw(7))}</View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: main,
  headerTxt: {
    color: '#344054',
    fontSize: 20,
    fontWeight: '600',
  },
  label: {
    color: '#2D31A6',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#667085',
    fontSize: 12,
    fontWeight: '400',
    marginVertical: vh(2),
  },
  section: {
    marginTop: 16,
  },
  doText: {
    color: '#039855',
    fontWeight: '700',
    fontSize: 12,
  },
  doContent: {
    fontWeight: '400',
    color: '#667085',
    fontSize: 12,
  },
  dontText: {
    color: '#D92D20',
    fontWeight: '700',
    fontSize: 12,
  },
  dontContent: {
    fontWeight: '400',
    color: '#667085',
    fontSize: 12,
  },
  dot: {
    fontSize: 16,
  },
  recommendTxt: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderBottomColor: '#667085',
    marginBottom: 16,
  },
  tab: {
    width: '50%',
    paddingVertical: vh(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2D31A6',
  },
  tabText: {
    color: '#667085',
    fontSize: 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#2D31A6',
  },
  contentContainer: {
    marginTop: 16,
  },
  itemContainer: {
    marginBottom: 16,
    rowGap: vh(1),
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D2939',
  },
  itemSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#3538CD',
  },
  itemDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#667085',
  },
  itemValue: {
    color: '#027A48',
    fontSize: 12,
    fontWeight: '400',
  },
  imgGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(2),
  },
});
