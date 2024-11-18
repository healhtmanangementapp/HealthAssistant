/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {vh, vw} from './services/styleSheets';
import {StyleSheet, View} from 'react-native';
import {
  homeActiveIcon,
  homeIcon,
  listActiveIcon,
  listIcon,
  newsActiveIcon,
  newsIcon,
  userActiveIcon,
  userIcon,
} from './assets/svgXml';
import Home from './views/bottomTab/Home';
import ListScreen from './views/bottomTab/ListScreen';
import News from './views/bottomTab/News';
import UserScreen from './views/bottomTab/UserScreen';
import Detail from './views/home/Detail';
import Customize from './views/list/Customize';
import NewsDetail from './views/news/NewsDetail';
import Login from './views/init/Login';
import Onboarding from './views/init/Onboarding';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <View style={styles.tabnavigationStyle}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarInactiveTintColor: '#8098F9',
            tabBarActiveTintColor: '#2D31A6',
            tabBarShowLabel: true,
            tabBarStyle: {
              borderTopColor: '#F9FAFB',
              backgroundColor: '#F9FAFB',
              height: vh(8),
              paddingBottom: vh(1),
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? homeActiveIcon(iconSize, iconSize, color)
                      : homeIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="List"
            component={ListScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? listActiveIcon(iconSize, iconSize, color)
                      : listIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? newsActiveIcon(iconSize, iconSize, color)
                      : newsIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="User"
            component={UserScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? userActiveIcon(iconSize, iconSize, color)
                      : userIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  };
  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="Login">
        {/* Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* End Tab Navigator */}
        {/* home navigation */}
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        {/* end home navigation */}
        {/* list navigation */}
        <Stack.Screen
          name="Customize"
          component={Customize}
          options={{headerShown: false}}
        />
        {/* end list navigation */}
        {/* news navigation */}
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{headerShown: false}}
        />
        {/* end news navigation */}
        {/* init */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        {/* end init */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabnavigationStyle: {flex: 1},
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
