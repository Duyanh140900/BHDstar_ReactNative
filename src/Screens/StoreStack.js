import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from '../Components/Store/Store';
import {Button,StyleSheet} from 'react-native'


const Stack = createNativeStackNavigator();

function StoreStack(props) {
  const {navigation} = props
  return (
    <>
      <Button title='Drawer' onPress={() => navigation.openDrawer()}></Button>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}}
      >
        <Stack.Screen name="Store" component={Store} />
      </Stack.Navigator>
    </>
      
  );
}

export default StoreStack;

const styles = StyleSheet.create({
  container: {
      flex:1,
  }
})
