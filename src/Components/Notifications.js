import { Text, View,Button } from 'react-native'
import React, { Component } from 'react'

export default class Notifications extends Component {
  render() {
    return (
      <View>
        <Text>Notifications</Text>
        <Button title='return' onPress={()=> this.props.navigation.goBack()}></Button>
      </View>
    )
  }
}