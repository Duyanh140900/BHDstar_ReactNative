import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personal from '../Components/Personal/Personal';
import Details from '../Components/Personal/Details';
import PaymentHistory from '../Components/Personal/PaymentHistory';
import Edit from '../Components/Personal/Edit';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  return (
    <>
      <Stack.Navigator
      screenOptions={{
          headerShown:false}
          }
          initialRouteName="Personal"
      >
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </>
      
  );
}

export default HomeStack;

