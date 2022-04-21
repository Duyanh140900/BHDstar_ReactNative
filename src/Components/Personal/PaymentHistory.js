import { Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

export default class PaymentHistory extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#020200', height: '100%' }}>
        <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginRight: 25, marginLeft: 5 }}
            title="return"
            onPress={() => this.props.navigation.goBack()}
          >
            <Feather style={{ color: '#d9d9d9' }} name="arrow-left" size={23}></Feather>
          </TouchableOpacity>
          <Text style={{ fontSize: 17, color: '#d9d9d9' }}>Account Infomation</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginLeft: 20 }}>Payment History</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
          <AntDesign style={{ color: '#5b5b5b' }} size={100} name="frowno"></AntDesign>
          <Text style={{ color: '#d9d9d9', marginBottom: 30, fontSize: 14, fontWeight: '300', marginTop: 10 }}>
            No transactions
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              backgroundColor: '#5aac00',
              width: 160,
              paddingVertical: 15,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}
          >
            <Text style={{ color: '#f2ffdf', fontSize: 16, fontWeight: 'bold' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
