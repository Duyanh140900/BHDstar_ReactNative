import * as React from 'react';
import { View, Image, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  const { navigation } = props
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={() => <View style={{ alignItems: "center"}}>
          <Image style={{ width: '100%', height: 35, resizeMode: "contain", marginLeft: 30 }} source={{ uri: "https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png" }}></Image>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='home' size={16}></FontAwesome>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Home</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.closeDrawer()}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='film' size={16}></FontAwesome>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Showtimes</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.toggleDrawer()}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <Icon style={{ color: "#5b5b5b", paddingRight: 10 }} name='shop' size={16}></Icon>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Store</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.toggleDrawer()}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <AntDesign style={{ color: "#5b5b5b", paddingRight: 10 }} name='notification' size={16}></AntDesign>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Media</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.toggleDrawer()}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='percent' size={16}></FontAwesome>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Promotions</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.toggleDrawer()}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='user-o' size={16}></FontAwesome>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Account Infomation</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.toggleDrawer()}
      />
      <DrawerItem
        label={() => <View style={{width:"100%",flexDirection:"row",alignItems:"center"}}>
          <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='shopping-bag' size={16}></FontAwesome>
          <Text style={{ color: '#c0c0c0',fontSize:15 }}>Careers</Text>
        </View>}
        style={{borderBottomColor: "#4f4f4f", borderBottomWidth: 1}}
        onPress={() => navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}