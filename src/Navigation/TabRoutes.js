import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native'
import HomeStack from '../Screens/HomeStack';
import ShowTimesStack from '../Screens/ShowTimesStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Personal from '../Components/Personal/Personal'
import Store from '../Components/Store/Store';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  return (
    <Tab.Navigator initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#68ad40',
        tabBarInactiveTintColor: '#858585',
        tabBarStyle: {
          backgroundColor: '#282828',
          height: 50,

        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 6
        }
      }}
    >
      <Tab.Screen
        name={"HOME"}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome style={{
                color: focused ? '#68ad40' : '#858585'
              }} name="home" size={25}></FontAwesome>
            )
          }
        }}
      />
      <Tab.Screen
        name={"SHOWTIMES"}
        component={ShowTimesStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome style={{
                color: focused ? '#68ad40' : '#858585'
              }} name="film" size={20}></FontAwesome>
            )
          }
        }}
      />
      <Tab.Screen
        name={"STORE"}
        component={Store}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.navigate('StoreStack');
          }
        })}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon style={{
                color: focused ? '#68ad40' : '#858585'
              }} name="shop" size={20}></Icon>
            )
          }
        }}
      />
      <Tab.Screen
        name={"PERSONAL"}
        component={Personal}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.navigate('PersonalStack');
          }
        })}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome style={{
                color: focused ? '#68ad40' : '#858585'
              }} name="user" size={20}></FontAwesome>
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;