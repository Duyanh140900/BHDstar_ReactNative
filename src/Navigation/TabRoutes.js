import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image,View,Text} from 'react-native'
import HomeStack from '../Screens/HomeStack';
import ShowTimesStack from '../Screens/ShowTimesStack';
import StoreStack from '../Screens/StoreStack';
import PersonalStack from '../Screens/PersonalStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
      <Tab.Navigator initialRouteName={"Home"}
      screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:'#68ad40',
          tabBarInactiveTintColor:'#858585',
          tabBarStyle:{
            backgroundColor:'#282828',
            height:60
          },
          tabBarLabelStyle: {
        fontSize: 15,
      }
      }}
      >
        <Tab.Screen 
        name={"HOME"} 
        component={HomeStack} 
        options={{
            tabBarIcon: ({focused}) => {
              return(
                    <FontAwesome style={{
                      color: focused ? '#68ad40' : '#858585'
                    }} name="home" size={35}></FontAwesome>
              )
            }
        }}
        />
        <Tab.Screen 
        name={"SHOWTIMES"} 
        component={ShowTimesStack} 
        options={{
            tabBarIcon: ({focused}) => {
              return(
                    <FontAwesome  style={{
                      color: focused ? '#68ad40' : '#858585'
                    }}name="film" size={30}></FontAwesome>
              )
            }
        }}
        />
        <Tab.Screen 
        name={"STORE"} 
        component={StoreStack} 
        options={{
            tabBarIcon: ({focused}) => {
              return(
                    <Icon style={{
                      color: focused ? '#68ad40' : '#858585'
                    }} name="shop" size={30}></Icon>
              )
            }
        }}
        />
        <Tab.Screen 
        name={"PERSONAL"} 
        component={PersonalStack} 
        options={{
            tabBarIcon: ({focused}) => {
              return(
                    <FontAwesome style={{
                      color: focused ? '#68ad40' : '#858585'
                    }} name="user" size={30}></FontAwesome>
              )
            }
        }}
        />
      </Tab.Navigator>
  );
}

export default Routes;