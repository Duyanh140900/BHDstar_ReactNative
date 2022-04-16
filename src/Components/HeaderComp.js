import { Text, View,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class HeaderComp extends Component {
  render() {
      const {goBack, text} = this.props
    return (
      <View>
        <TouchableOpacity onPress={goBack}>
        <Text>Back</Text>
        </TouchableOpacity>
        <Text>{text}</Text>
      </View>
    )
  }
}