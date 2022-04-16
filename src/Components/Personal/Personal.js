import { Text, View } from 'react-native'
import React, { Component } from 'react'
import FilmCarousel from '../Home/FilmCarousel'

export default class Personal extends Component {
  render() {
    return (
      <View>
        <Text>Personal</Text>
        <FilmCarousel/>
      </View>
    )
  }
}