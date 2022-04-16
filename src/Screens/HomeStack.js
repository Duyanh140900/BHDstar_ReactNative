import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home/Home'
import Notifications from '../Components/Notifications'
import {Button,StyleSheet} from 'react-native'
import Infomation from '../Components/Home/Infomation';
import FilmCarousel from '../Components/Home/FilmCarousel';
import HomeTab from '../Navigation/HomeTab';
import Booking from '../Components/Home/Booking';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  return (
    <>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}
          }
          initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="Infomation" component={Infomation} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </>
      
  );
}

export default HomeStack;

