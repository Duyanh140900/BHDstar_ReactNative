import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NowShowing from '../Components/Home/NowShowing';
import ComingSoon from '../Components/Home/ComingSoon';
import ComingSoonStack from './ComingSoonStack';

const Tab = createMaterialTopTabNavigator();

export default class HomeTab extends Component {
  render() {
      console.log("tab");
    return (
      <Tab.Navigator
      tabBarOptions={{
        style: {
            elevation: 0,   // for Android
            shadowOffset: {
                width: 0, height: 0 // for iOS
            },
        }
    }}
      screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:'#68ad40',
          tabBarInactiveTintColor:'#858585',
          tabBarStyle:{
            backgroundColor:'#282828',
            height:50,
            position:'absolute',
            width:'90%',
            justifyContent:"center",
            marginTop:10,
            left:20,
            borderRadius:6,
            borderTopWidth: 0,
          },
          tabBarShowLabel:false,
          tabBarIndicatorStyle:{
            width:0
          },
          swipeEnabled:false
      }}
      >
          <Tab.Screen 
            name={"NowShowing"} 
            component={NowShowing} 
            options={{
            tabBarIcon: ({focused}) => {
              return(
                    <View style={{
                        backgroundColor: focused ? '#4a4a4a' : '#282828',
                        paddingLeft:160,
                        height:40,
                        position:"absolute",
                        left:-67,
                        borderRadius:7,
                        top:-8,
                        color: focused ? '#d9d9d9': '#b2b2b2'
                    }}>
                        <Text style={{color: focused ? '#d9d9d9': '#b2b2b2',position:"absolute", top:10, right:40}}>Now Showing</Text>
                    </View>
              )
            }
        }}
          />

            <Tab.Screen 
            name={"Coming Soon"} 
            component={ComingSoonStack} 
            options={{
            tabBarIcon: ({focused}) => {
              return(
                    <View style={{
                        backgroundColor: focused ? '#4a4a4a' : '#282828',
                        paddingLeft:160,
                        height:40,
                        position:"absolute",
                        left:-70,
                        borderRadius:7,
                        top:-8,
                        
                    }}>
                        <Text style={{position:"absolute", top:10, right:40, color: focused ? '#d9d9d9': '#b2b2b2'}}>Coming Soon</Text>
                    </View>
              )
            }
        }}
          />
      </Tab.Navigator>
    )
  }
}