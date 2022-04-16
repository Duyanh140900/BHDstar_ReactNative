import { Text, View ,Button} from 'react-native'
import React, { Component } from 'react'

export default class Infomation extends Component {
  render() {
    return (
      <View>
        <Text>Infomation</Text>
        <Button title='return' onPress={()=> this.props.navigation.goBack()}></Button>
      </View>
    )
  }
}