import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer'
import PlusStack from '../Screens/PlusStack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    //   <Stack.Navigator
    //   screenOptions={{headerShown:false}}>
    //     {MainStack(Stack)}
    //   </Stack.Navigator>
    <Drawer.Navigator
      screenOptions={
        {
          drawerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerShown: false
        }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={PlusStack} name={'PlusStack'} />
    </Drawer.Navigator>
  );
}

export default Routes;