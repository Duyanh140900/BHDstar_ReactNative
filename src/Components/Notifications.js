import { Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class Notifications extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#020200', height: "100%" }}>
        <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
          <TouchableOpacity style={{ marginRight: 25, marginLeft: 5 }} title='return' onPress={() => this.props.navigation.goBack()}>
            <Feather style={{ color: '#d9d9d9' }} name='arrow-left' size={23}></Feather>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#d9d9d9' }}>Notifications</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center", marginTop:150}}>
          <MaterialCommunityIcons style={{ color: "#5b5b5b" }} size={200} name="antenna"></MaterialCommunityIcons>
          <Text style={{ color: '#d9d9d9', marginBottom:20, fontSize:15, fontWeight:"500" }}>No Data Found/ Displayed/ Available</Text>
          <TouchableOpacity style={{
            backgroundColor: "#5aac00", width: 160, paddingVertical: 15, flexDirection: "row", justifyContent: "center",
            alignItems: "center", borderRadius: 4
          }}>
            <Text style={{ color: "#f2ffdf", fontSize: 16, fontWeight: "bold" }}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}