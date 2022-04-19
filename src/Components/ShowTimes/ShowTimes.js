import { Text, View, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'
import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TheaterTab from '../../Navigation/TheaterTab';
import HomeTab from '../../Navigation/HomeTab';

export default class ShowTimes extends Component {
  render() {
    const { navigation } = this.props;
    const {height, width} = Dimensions.get('window');
    return (
      <View style={{backgroundColor: '#020200', height:height}}>
        <View style={{ height: 60 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.navbarLeft}>
            <FontAwesome style={{ color: "#fff9ff" }} name='bars' size={22}></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarRight} onPress={() => navigation.navigate("Notifications")}>
            <FontAwesome style={{ color: "#fff9ff" }} name='bell' size={22}></FontAwesome>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal:20}}>
        <View>
          <View>
            <Text style={styles.title}>Booking by Theater</Text>
          </View>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:20, marginBottom:30}}>
            <Text style={styles.screen}>Screen</Text>
            <View style={styles.type}>
              <Text style={styles.screen}>5</Text>
              <Text style={styles.screen}>types</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'black', height:height}}>
          <TheaterTab />
        </View>
        </View>
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
  },
  title:{
    color:'#fbfbfb',
    fontSize:25,
    fontWeight:"500"
  },
  screen:{
    color:'#c2c3c0'
  },
  type:{
    paddingHorizontal:25,
    paddingVertical:10,
    borderColor:"#c2c3c0",
    borderWidth:1,
    borderRadius:6
  }
})