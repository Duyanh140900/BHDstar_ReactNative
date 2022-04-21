import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  BackHandler,
  ToastAndroid,
} from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Picker } from '@react-native-picker/picker'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog'
import GifImage from '@lowkey/react-native-gif'

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  render() {
    const { visible } = this.state

    const { user } = this.props.route.params

    let update = () => {
      this.setState({
        visible: true,
      })
    }
    return (
      <View style={{ padding: 15, backgroundColor: '#020200', height: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginRight: 25, marginLeft: 5 }}
            title="return"
            onPress={() => this.props.navigation.goBack()}
          >
            <Feather style={{ color: '#d9d9d9' }} name="arrow-left" size={23}></Feather>
          </TouchableOpacity>
          <Text style={{ fontSize: 17, color: '#d9d9d9' }}>Account Infomation</Text>
        </View>
        <ScrollView>
          <View>
            <Text style={styles.title}>Edit/ Update</Text>
          </View>
          <View>
            <View style={[styles.fieldSet, { borderColor: '#575755' }]}>
              <Text style={[styles.legend, { color: '#575755' }]}>Email</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{ height: 40, color: '#575755' }}
                defaultValue={user.email}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={[styles.fieldSet, { width: Dimensions.get('window').width * 0.4, borderColor: '#d9d9d9' }]}>
                <Text style={[styles.legend, { color: '#d9d9d9' }]}>Last Name</Text>
                <TextInput
                  style={{ height: 40, color: '#d9d9d9' }}
                  defaultValue={user.lastname}
                  onChangeText={(newText) => {
                    this.setState({
                      user: {
                        ...this.state.user,
                        lastname: newText,
                      },
                    })
                  }}
                />
              </View>

              <View style={[styles.fieldSet, { width: Dimensions.get('window').width * 0.4, borderColor: '#d9d9d9' }]}>
                <Text style={[styles.legend, { color: '#d9d9d9' }]}>First Name</Text>
                <TextInput
                  onChangeText={(newText) => {
                    this.setState({
                      user: {
                        ...this.state.user,
                        firstname: newText,
                      },
                    })
                  }}
                  style={{ height: 40, color: '#d9d9d9' }}
                  defaultValue={user.firstname}
                />
              </View>
            </View>

            <View style={[styles.fieldSet, { borderColor: '#575755' }]}>
              <Text style={[styles.legend, { color: '#575755' }]}>Mobile</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{ height: 40, color: '#575755' }}
                defaultValue={user.mobile}
              />
            </View>

            <View style={[styles.fieldSet, { borderColor: '#575755' }]}>
              <Text style={[styles.legend, { color: '#575755' }]}>Date Of Birth</Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={{ height: 40, color: '#575755' }}
                defaultValue={user.dateofbirth}
              />
            </View>

            <View style={[styles.fieldSet, { borderColor: '#d9d9d9' }]}>
              <Text style={[styles.legend, { color: '#d9d9d9' }]}>Gender</Text>
              <Picker
                selectedValue={user.gender}
                style={{ height: 40, color: '#d9d9d9', marginBottom: 10 }}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      gender: itemValue,
                    },
                  })
                }}
                dropdownIconColor={'#d9d9d9'}
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>

            <View style={[styles.fieldSet, { borderColor: '#d9d9d9' }]}>
              <Text style={[styles.legend, { color: '#d9d9d9' }]}>City/ Province</Text>
              <Picker
                dropdownIconColor={'#d9d9d9'}
                selectedValue={user.city}
                style={{ height: 40, color: '#d9d9d9', marginBottom: 10 }}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      city: itemValue,
                    },
                  })
                }}
              >
                <Picker.Item label="Nghệ An" value="nghean" />
                <Picker.Item label="Hà Nội" value="hanoi" />
                <Picker.Item label="Huế" value="hue" />
                <Picker.Item label="Hải Phòng" value="haiphong" />
                <Picker.Item label="Hồ Chí Minh" value="hochiminh" />
                <Picker.Item label="Đà Lạt" value="dalat" />
                <Picker.Item label="Bắc Ninh" value="bacninh" />
              </Picker>
            </View>

            <View style={[styles.fieldSet, { borderColor: '#d9d9d9' }]}>
              <Text style={[styles.legend, { color: '#d9d9d9' }]}>Address</Text>
              <TextInput
                onChangeText={(newText) => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      address: newText,
                    },
                  })
                }}
                style={{ height: 40, color: '#d9d9d9' }}
                defaultValue={user.address}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => update()}
            style={{
              backgroundColor: '#5aac00',
              width: 260,
              paddingVertical: 15,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}
          >
            <Text style={{ color: '#f2ffdf', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Update</Text>
          </TouchableOpacity>
        </View>
        <Dialog
          onHardwareBackPress={() => {
            this.setState({ visible: false })
          }}
          visible={visible}
          footer={
            <DialogFooter>
              <DialogButton
                style={{ backgroundColor: '#5aac00' }}
                text="Close"
                textStyle={{ color: 'white' }}
                onPress={() => {
                  this.setState(
                    {
                      visible: false,
                    },
                    () =>
                      setTimeout(() => {
                        this.props.navigation.goBack()
                      }, 500)
                  )
                }}
              />
            </DialogFooter>
          }
        >
          <DialogContent style={{ backgroundColor: '#000101' }}>
            <View>
              <GifImage
                source={{
                  uri: 'https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif',
                }}
                style={{
                  width: 200,
                  height: 150,
                }}
                resizeMode={'cover'}
              />
              <Text style={{ textAlign: 'center', alignContent: 'center', color: 'white' }}>update successfully</Text>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fieldSet: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 30,
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#020200',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 20,
    marginVertical: 25,
  },
})
