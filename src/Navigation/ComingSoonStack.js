import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home/Home'
import Notifications from '../Components/Notifications'
import {Button,StyleSheet} from 'react-native'
import Infomation from '../Components/Home/Infomation';
import ComingSoon from '../Components/Home/ComingSoon';
import NowShowing from '../Components/Home/NowShowing';

const Stack = createNativeStackNavigator();

function ComingSoonStack() {
  return (
    <>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}
          }
      >
        <Stack.Screen name="ComingSoon" component={ComingSoon} />
        <Stack.Screen name="NowShowing" component={NowShowing} />
      </Stack.Navigator>
    </>
      
  );
}

export default ComingSoonStack;

