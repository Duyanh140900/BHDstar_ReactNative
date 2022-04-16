import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowTimes from '../Components/ShowTimes/ShowTimes'
import Notifications from '../Components/Notifications'
import {Button,StyleSheet} from 'react-native'

const Stack = createNativeStackNavigator();

function ShowTimesStack(props) {
  const {navigation} = props
  return (
    <>
      <Button title='Drawer' onPress={() => navigation.openDrawer()}></Button>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}}
          >
        <Stack.Screen name="ShowTimes" component={ShowTimes} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </>
      
  );
}

export default ShowTimesStack;

const styles = StyleSheet.create({
  container: {
      flex:1,
  }
})
