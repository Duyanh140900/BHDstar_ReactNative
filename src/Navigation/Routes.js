import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import CustomDrawer from '../Components/CustomDrawer'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    //   <Stack.Navigator
    //   screenOptions={{headerShown:false}}>
    //     {MainStack(Stack)}
    //   </Stack.Navigator>
    <Drawer.Navigator
      screenOptions={{headerShown:false}}
      drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen component={TabRoutes} name={'Home'}/>
      </Drawer.Navigator>
  );
}

export default Routes;