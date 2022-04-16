import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
    const {navigation} =props
    return (
      <DrawerContentScrollView>
        <DrawerItem
          label="Close drawer"
          onPress={() => navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }