/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import useStatusBar from '../../services/useStatusBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NewsListData} from '../../services/renderData';
import {backIcon, doubleSaveIcon} from '../../assets/svgXml';

const NewsDetail = () => {
  useStatusBar('#EAECF5');
  const route = useRoute();
  const {dataIndex} = route.params as {dataIndex: number};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TopRender dataIndex={dataIndex} />
        <View style={{flex: 1, paddingHorizontal: vw(5), marginBottom: vh(2)}}>
          <MainContent dataIndex={dataIndex} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC<{dataIndex: number}> = ({dataIndex}) => {
  const renderData = NewsListData[dataIndex];

  return (
    <View>
      <Text style={styles.mainTitle}>{renderData.title}</Text>
      <Text style={styles.mainPost}>{renderData.post}</Text>
      <View style={styles.mainsolidLine} />
      <Text style={styles.mainDescription}>{renderData.description}</Text>
      <View>
        <Text style={styles.mainPrevention}>Prevention:</Text>
        <View>
          {renderData.prevention.map((item, index) => {
            return (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.preventionTxt}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <Text style={styles.mainPrevention}>Treatment:</Text>
        <View>
          {renderData.treatment.map((item, index) => {
            return (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.preventionTxt}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const TopRender: React.FC<{dataIndex: number}> = ({dataIndex}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const renderData = NewsListData[dataIndex];

  return (
    <View style={styles.topRenderContainer}>
      <TouchableOpacity
        style={[
          styles.topBtn,
          {alignSelf: 'flex-start', top: vh(3), left: vw(5)},
        ]}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(7), vw(7), '#EEF4FF')}
      </TouchableOpacity>
      <Image style={styles.topImg} source={renderData.img} />
      <TouchableOpacity
        disabled={true}
        style={[
          styles.topBtn,
          {alignSelf: 'flex-start', top: vh(3), right: vw(5)},
        ]}>
        {doubleSaveIcon(vw(7), vw(7), '#EEF4FF')}
      </TouchableOpacity>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: main,
  topBtn: {
    backgroundColor: '#242F4199',
    padding: vw(2),
    borderRadius: vw(30),
    position: 'absolute',
    zIndex: 2,
  },
  topImg: {
    width: '100%',
    height: vh(20),
    resizeMode: 'cover',
  },
  topRenderContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10}, // Increased shadow height for more depth
    shadowOpacity: 0.25, // Reduced opacity for a subtle shadow
    shadowRadius: 10, // Smoothened shadow
    elevation: 10, // Enhanced elevation for Android
    backgroundColor: '#fff', // Background color for clarity
    borderRadius: vw(2), // Match image corner rounding
    marginBottom: vh(2), // Added margin to avoid shadow overlap with other components
  },
  // Main Content
  mainTitle: {
    color: '#2D31A6',
    fontSize: 16,
    fontWeight: '600',
  },
  mainPost: {
    color: '#667085',
    fontSize: 12,
    fontWeight: '400',
  },
  mainsolidLine: {
    height: 1,
    backgroundColor: '#667085',
    marginVertical: vh(2),
  },
  mainDescription: {
    color: '#2D31A6',
    fontSize: 14,
    fontWeight: '400',
  },
  mainPrevention: {
    color: '#667085',
    fontSize: 14,
    fontWeight: '700',
    marginVertical: vh(2),
  },
  preventionTxt: {
    color: '#667085',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: vh(0.5),
  },
  bulletPoint: {
    color: '#667085',
    fontSize: 16,
    fontWeight: '400',
    marginRight: vw(2),
  },
});
