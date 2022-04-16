import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class Booking extends Component {
  render() {
    return (
      <View>
        <Text>Booking</Text>
        <Button title='return' onPress={()=> this.props.navigation.goBack()}></Button>
      </View>
    )
  }
}