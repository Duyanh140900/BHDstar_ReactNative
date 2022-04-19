import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home/Home'
import HomeTab from '../Navigation/HomeTab';
import Payment from '../Components/Store/Payment';
import PaymentHistory from '../Components/Personal/PaymentHistory';

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
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </>
      
  );
}

export default HomeStack;

