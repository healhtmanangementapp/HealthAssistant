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
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {clipLabelIcon, followIcon, menuIcon} from '../../assets/svgXml';
import {NewsItem, NewsRenderProps} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {getCurrentMonthAndDate, NewsListData} from '../../services/renderData';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const News = () => {
  useStatusBar('#EAECF5');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5), marginBottom: vh(2)}}>
          <Header />
          <MainContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'follow'>('all');
  const [renderData, setRenderData] = useState<NewsItem[]>([]);

  const fetchData = async () => {
    await loadData<NewsItem[]>(`NewsData${getCurrentMonthAndDate()}`)
      .then(data => {
        setRenderData(data);
      })
      .catch(() => {
        saveData(`NewsData${getCurrentMonthAndDate()}`, NewsListData);
        setRenderData(NewsListData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'all' && styles.selectedTab]}
          onPress={() => setSelectedTab('all')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'all' && styles.tabActiveText,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'follow' && styles.selectedTab]}
          onPress={() => setSelectedTab('follow')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'follow' && styles.tabActiveText,
            ]}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {selectedTab === 'all' ? (
          <NewsRender data={renderData} showButton={false} />
        ) : (
          <NewsRender data={renderData} showButton={true} />
        )}
      </View>
    </View>
  );
};

const NewsRender: React.FC<NewsRenderProps> = ({data, showButton}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handlePress = (index: number) => {
    navigation.navigate('NewsDetail', {dataIndex: index});
  };

  return (
    <View style={{rowGap: vh(2)}}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => handlePress(index)}
            key={index}
            style={styles.newsRenderContainer}>
            <View style={styles.clipContainer}>
              {clipLabelIcon(vw(5), vw(5))}
              <Text style={styles.clipTxt}>Label</Text>
            </View>
            <Image source={item.img} style={styles.newsRenderImg} />
            <View style={styles.newsRenderDataContainer}>
              <Text numberOfLines={1} style={styles.newsRenderTitle}>
                {item.title}
              </Text>
              <Text style={styles.newsRenderPost}>{item.post}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    columnGap: vw(2),
                    alignItems: 'center',
                    marginTop: vh(1),
                  }}>
                  <Image
                    style={styles.newsRenderAvatar}
                    source={require('../../assets/home/avatar.png')}
                  />
                  <Text style={styles.newsRenderAuthor}>Author</Text>
                </View>
                {showButton && (
                  <TouchableOpacity style={styles.followBtn}>
                    {followIcon(vw(5), vw(5))}
                    <Text style={styles.followBtnTxt}>Follow</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(2),
      }}>
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        News
      </Text>
      {menuIcon(vw(8), vw(8))}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: main,
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
  // News Render
  newsRenderContainer: {
    backgroundColor: '#F5F6FA',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  newsRenderDataContainer: {
    paddingHorizontal: vw(3),
    paddingVertical: vh(2),
  },
  newsRenderImg: {
    width: '100%',
    height: vh(20),
    resizeMode: 'cover',
  },
  newsRenderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D31A6',
  },
  newsRenderPost: {
    fontSize: 12,
    color: '#667085',
  },
  newsRenderAvatar: {
    width: vw(6),
    height: vw(6),
  },
  newsRenderAuthor: {
    fontSize: 12,
    color: '#1D2939',
  },
  clipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242F4199',
    padding: vw(2),
    position: 'absolute',
    zIndex: 2,
    borderBottomRightRadius: 12,
    columnGap: vw(1),
  },
  clipTxt: {
    fontSize: 12,
    color: '#FCFCFD',
    fontWeight: '600',
  },
  followBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(2),
    backgroundColor: '#2D31A6',
    borderRadius: 12,
    columnGap: vw(1),
  },
  followBtnTxt: {
    color: '#FCFCFD',
    fontSize: 12,
    fontWeight: '600',
  },
});
