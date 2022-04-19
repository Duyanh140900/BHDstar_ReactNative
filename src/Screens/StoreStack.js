import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from '../Components/Store/Store';
import Payment from '../Components/Store/Payment';


const Stack = createNativeStackNavigator();

function StoreStack(props) {
  return (
    <>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}
          }
          initialRouteName="Store"
      >
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </>
      
  );
}

export default StoreStack;

