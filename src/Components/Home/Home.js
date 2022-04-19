import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Slide from './Slide';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeTab from '../../Navigation/HomeTab';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';


export default class Home extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View >
        <View >
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.navbarLeft}>
            <FontAwesome style={{ color: "#fff9ff" }} name='bars' size={22}></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarRight} onPress={() => navigation.navigate("Notifications")}>
            <FontAwesome style={{ color: "#fff9ff" }} name='bell' size={22}></FontAwesome>
          </TouchableOpacity>
        </View>
        <Slide style={styles.slide} />
        <View style={{ backgroundColor: 'black', height: '100%', justifyContent: "center" }}>
          <HomeTab />
        </View>
        <Dialog visible={false}></Dialog>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbarLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
    color: "red",
    marginLeft: 20,
    marginTop: 15
  },
  slide: {
    position: "relative",
  },
  navbarRight: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 999,
    color: "red",
    marginRight: 20,
    marginTop: 15
  }
})