import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowTimes from '../Components/ShowTimes/ShowTimes'
import {Button,StyleSheet} from 'react-native'

const Stack = createNativeStackNavigator();

function ShowTimesStack(props) {
  const {navigation} = props
  return (
    <>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}}
          >
        <Stack.Screen name="ShowTimes" component={ShowTimes} />
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
