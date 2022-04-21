import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Spinner from 'react-native-loading-spinner-overlay'

export default class Notifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: false,
    }
  }
  tryAgain = () => {
    this.setState({
      spinner: true,
    })
    setTimeout(() => {
      this.setState({
        spinner: false,
      })
    }, 3000)
  }

  render() {
    console.log(this.state.spinner)
    return (
      <View style={{ backgroundColor: '#020200', height: '100%' }}>
        {this.state.spinner == false && (
          <View>
            <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
              <TouchableOpacity
                style={{ marginRight: 25, marginLeft: 5 }}
                title="return"
                onPress={() => this.props.navigation.goBack()}
              >
                <Feather style={{ color: '#d9d9d9' }} name="arrow-left" size={23}></Feather>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, color: '#d9d9d9' }}>Notifications</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
              <MaterialCommunityIcons style={{ color: '#5b5b5b' }} size={200} name="antenna"></MaterialCommunityIcons>
              <Text style={{ color: '#d9d9d9', marginBottom: 20, fontSize: 15, fontWeight: '500' }}>
                No Data Found/ Displayed/ Available
              </Text>
              <TouchableOpacity
                onPress={() => this.tryAgain()}
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
                <Text style={{ color: '#f2ffdf', fontSize: 16, fontWeight: 'bold' }}>Try Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {this.state.spinner && (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator color={'#fff'} size="large" />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
