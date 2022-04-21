import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Components/Home/Home'
import Notifications from '../Components/Notifications'
import { Button, StyleSheet } from 'react-native'
import Infomation from '../Components/Home/Infomation'
import FilmCarousel from '../Components/Home/FilmCarousel'
import HomeTab from '../Navigation/HomeTab'
import Booking from '../Components/Home/Booking'
import TabRoutes from '../Navigation/TabRoutes'
import PersonalStack from './PersonalStack'
import StoreStack from '../Screens/StoreStack'
import PaymentHistory from '../Components/Personal/PaymentHistory'
import Edit from '../Components/Personal/Edit'

const Stack = createNativeStackNavigator()

function PlusStack(props) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TabRoutes"
      >
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Infomation" component={Infomation} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="PersonalStack" component={PersonalStack} />
        <Stack.Screen name="StoreStack" component={StoreStack} />
      </Stack.Navigator>
    </>
  )
}

export default PlusStack
