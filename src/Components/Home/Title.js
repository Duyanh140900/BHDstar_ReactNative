import { Text, View } from 'react-native'
import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Title extends Component {
  render() {
      const {title} = this.props
    return (
        <View style={{width:'100%'}}>
        <View style={{ alignItems: "center" }}>
          <Text numberOfLines={2} style={{ color: "#e9e9e7", fontSize: 16, fontWeight: "bold", marginTop: 10, textAlign: 'center'}}>{title}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom:10 }}>
          <FontAwesome style={{ color: "#575755", paddingRight: 5 }} name='clock-o' size={22}></FontAwesome>
          <Text style={{ color: "#575755", paddingRight: 5 }}>100 minutes</Text>
          <View style={{ color: "#853330", borderColor: "red", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
            <Text style={{ color: "red" }}>C16</Text>
          </View>
        </View>
      </View>
    )
  }
}