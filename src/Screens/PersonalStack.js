import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personal from '../Components/Personal/Personal';
import {Button,StyleSheet} from 'react-native'


const Stack = createNativeStackNavigator();

function PersonalStack(props) {
  const {navigation} = props
  return (
    <>
      <Button title='Drawer' onPress={() => navigation.openDrawer()}></Button>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}}
      >
        <Stack.Screen name="Personal" component={Personal} />
      </Stack.Navigator>
    </>
      
  );
}

export default PersonalStack;

const styles = StyleSheet.create({
  container: {
      flex:1,
  }
})
