import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NowShowing from '../Components/Home/NowShowing';
import ComingSoon from '../Components/Home/ComingSoon';

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
            left:17,
            borderRadius:6,
            borderTopWidth: 0,
          },
          tabBarShowLabel:false,
          tabBarIndicatorStyle:{
            width:0
          },
          tabBarContentContainerStyle:{

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
                        paddingLeft:150,
                        height:40,
                        position:"absolute",
                        left:-67,
                        borderRadius:7,
                        top:-8,
                        color: focused ? '#d9d9d9': '#b2b2b2',
                        width:30,
                        alignItems:"center",
                        justifyContent:"center",
                        marginLeft:5
                    }}>
                        <Text style={{color: focused ? '#d9d9d9': '#b2b2b2',position:"absolute", top:10, right:25}}>Now Showing</Text>
                    </View>
              )
            }
        }}
          />

            <Tab.Screen 
            name={"Coming Soon"} 
            component={ComingSoon} 
            options={{
            tabBarIcon: ({focused}) => {
              return(
                    <View style={{
                        backgroundColor: focused ? '#4a4a4a' : '#282828',
                        paddingLeft:150,
                        height:40,
                        position:"absolute",
                        left:-70,
                        borderRadius:7,
                        top:-8,
                        marginLeft:5
                    }}>
                        <Text style={{position:"absolute", top:10, right:25, color: focused ? '#d9d9d9': '#b2b2b2'}}>Coming Soon</Text>
                    </View>
              )
            }
        }}
          />
      </Tab.Navigator>
    )
  }
}