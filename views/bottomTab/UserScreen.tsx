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
import useStatusBar from '../../services/useStatusBar';
import {RenderLayoutInterface, userInforProps} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {
  HelpCenter,
  OtherInfor,
  Self,
  SystemSetting,
  UserInfor,
} from '../../services/renderData';
import {useFocusEffect} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';
import Slider from '@react-native-community/slider';
import {nextIcon} from '../../assets/svgXml';

const UserScreen = () => {
  useStatusBar('#EAECF5');
  const [user, setUser] = useState<userInforProps>({
    name: 'Nguyen Dinh Minh Anh',
    age: 18,
    weight: 52,
    height: 165,
  });

  const fetchData = async () => {
    await loadData<userInforProps>('UserInforStorage')
      .then(data => {
        setUser(data);
      })
      .catch(() => {
        saveData('UserInforStorage', UserInfor);
        setUser(UserInfor);
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
        <View style={{flex: 1, marginTop: vh(2)}}>
          <RenderUserInfor user={user} />
          <MainContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderUserInfor: React.FC<{user: userInforProps}> = ({user}) => {
  return (
    <View>
      <Image style={styles.userImg} source={require('../../assets/home/avatar.png')} />
      <Text style={styles.userName}>{user.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <UserInforComponent title="Age" value={`${user.age}`} unit="years" />
        <UserInforComponent title="Weight" value={`${user.weight}`} unit="kg" />
        <UserInforComponent title="Height" value={`${user.height}`} unit="cm" />
      </View>
    </View>
  );
};

const UserInforComponent: React.FC<{
  title: string;
  value: string;
  unit: string;
}> = ({title, value, unit}) => {
  return (
    <View style={[centerAll, styles.userInfoComponentContainer]}>
      <Text style={styles.userTitle}>{title}</Text>
      <Text style={styles.userValue}>
        {value}
        <Text style={styles.unit}> {unit}</Text>
      </Text>
    </View>
  );
};

const MainContent: React.FC = () => {
  const [toggleStates, setToggleStates] = useState(
    SystemSetting.map(() => false),
  );

  // Create an onToggle function
  const onToggle = (index: number) => {
    setToggleStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state)),
    );
  };

  return (
    <View style={{marginVertical: vh(2)}}>
      <View style={{paddingHorizontal: vw(5), rowGap: vh(2)}}>
        <RenderLayout title="User" renderData={Self} />
        <View>
          <Text style={styles.title}>System settings</Text>
          {SystemSetting.map((item, index) => {
            return (
              <TouchableOpacity
                disabled
                key={index}
                style={styles.renderContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: vw(2),
                  }}>
                  {item.icon}
                  <Text style={{color: '#1D2939', fontSize: 16}}>
                    {item.title}
                  </Text>
                </View>
                {index === 2 ? (
                  <Slider
                    style={{width: vw(45), height: vh(1)}}
                    minimumValue={0}
                    maximumValue={1}
                    value={0.5}
                    minimumTrackTintColor="#3E4784"
                    maximumTrackTintColor="#E4E7EC"
                    thumbTintColor="#3E4784"
                  />
                ) : (
                  <ToggleSwitch
                    isOn={toggleStates[index]}
                    size="small"
                    onToggle={() => onToggle(index)}
                    thumbOnStyle={{
                      backgroundColor: '#717BBC', // Change border color based on state
                      margin: 2, // Add margin to ensure the thumb stays inside the border
                    }}
                    thumbOffStyle={{
                      backgroundColor: '#D0D5DD', // Change border color based on state
                      margin: 2, // Add margin to ensure the thumb stays inside the border
                    }}
                    trackOnStyle={{
                      borderColor: '#717BBC', // Change border color based on state
                      borderWidth: 2, // Adjust the border width as needed
                      backgroundColor: 'transparent', // Make the background transparent
                      padding: 10, // Add padding to ensure the thumb stays inside the border
                    }}
                    trackOffStyle={{
                      borderColor: '#D0D5DD', // Change border color based on state
                      borderWidth: 2, // Adjust the border width as needed
                      backgroundColor: 'transparent', // Make the background transparent
                      padding: 10, // Add padding to ensure the thumb stays inside the border
                    }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <RenderLayout title="Help Center" renderData={HelpCenter} />
        <RenderLayout title="Other" renderData={OtherInfor} />
      </View>
    </View>
  );
};

const RenderLayout: React.FC<RenderLayoutInterface> = ({renderData, title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {renderData.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.renderContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              {item.icon}
              <Text style={{color: '#1D2939', fontSize: 16}}>{item.title}</Text>
            </View>
            {nextIcon(vw(7), vw(7), '#98A2B3')}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: main,
  title: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  renderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(1),
    alignItems: 'center',
  },
  userImg: {
    width: vw(25),
    height: vw(25),
    borderRadius: vw(30),
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#E4E7EC',
  },
  userName: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: vh(1),
  },
  userInfoComponentContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C7D7FE',
    width: vw(25),
    paddingVertical: vh(1),
  },
  userTitle: {
    color: '#6172F3',
    fontSize: 14,
    fontWeight: '600',
  },
  userValue: {
    color: '#1D2939',
    fontSize: 12,
    fontWeight: '700',
  },
  unit: {
    color: '#1D2939',
    fontSize: 12,
    fontWeight: '400',
  },
});
