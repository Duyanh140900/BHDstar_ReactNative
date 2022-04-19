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
          swipeEnabled:false,
          tabBarIndicatorStyle: {
                        backgroundColor: "blue",
                        height: 0,
                    },
          tabBarContentContainerStyle:{
                       padding:0,
                       margin:0,
                       paddingBottom:15,
                       justifyContent:"center"
                    },
                    tabBarShowLabel:false,
                    tabBarStyle: {
                        backgroundColor: '#020200',
                        height: 60, 
                        justifyContent:"space-between"
                    },

                    tabBarItemStyle: {
                        width: 160,
                        height: 40,
                        justifyContent:"center"
                    },
                    tabBarIconStyle:{
                        width:150
                    }
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
                        width:150,
                        height:40,
                        borderRadius:7,
                        color: focused ? '#d9d9d9': '#b2b2b2',
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                        <Text style={{color: focused ? '#d9d9d9': '#b2b2b2',textAlign:"center"}}>Now Showing</Text>
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
                        width:150,
                        height:40,
                        borderRadius:7,
                        alignItems:"center",
                        justifyContent:"center"

                    }}>
                        <Text style={{textAlign:"center", color: focused ? '#d9d9d9': '#b2b2b2'}}>Coming Soon</Text>
                    </View>
              )
            }
        }}
          />
      </Tab.Navigator>
    )
  }
}