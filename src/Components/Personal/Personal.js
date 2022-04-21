import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ToastAndroid,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog'
import Edit from './Edit'

export default class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      password: 'duyanh123',
      currentPassword: '',
      currentPasswordErrorMessage: '',
      newPassword: '',
      newPasswordErrorMessage: '',
      confirmPassword: '',
      confirmPasswordErrorMessage: '',
      user: {
        email: 'duymesut1@gmail.com',
        lastname: 'Pham',
        firstname: 'Duy',
        mobile: '0979308884',
        dateofbirth: '14/09/2000',
        gender: 'male',
        city: 'nghean',
        address: 'Phung Chi Kien',
      },
    }
  }

  render() {
    const { navigation } = this.props
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    const {
      password,
      currentPassword,
      confirmPasswordErrorMessage,
      newPassword,
      newPasswordErrorMessage,
      confirmPassword,
      currentPasswordErrorMessage,
    } = this.state

    let formValidation = () => {
      let check = false

      // input validation
      if (password != currentPassword) {
        this.setState({ currentPasswordErrorMessage: 'Current password not true' })
        check = false
      } else {
        this.setState({ currentPasswordErrorMessage: '' })
        check = true
      }

      if (newPassword.length == 0) {
        this.setState({ newPasswordErrorMessage: 'Password is required feild' })
        check = false
      } else if (newPassword.length < 8 || newPassword.length > 20) {
        this.setState({ newPasswordErrorMessage: 'Password should be min 8 char and max 20 char' })
        check = false
      } else if (newPassword !== confirmPassword) {
        this.setState({ newPasswordErrorMessage: 'Password and confirm password should be same.' })
        check = false
      } else {
        this.setState({ newPasswordErrorMessage: '' })
        check = true
      }

      if (confirmPassword.length == 0) {
        this.setState({ confirmPasswordErrorMessage: 'Confirm Password is required feild' })
        check = false
      } else if (confirmPassword.length < 8 || confirmPassword.length > 20) {
        this.setState({ confirmPasswordErrorMessage: 'Password should be min 8 char and max 20 char' })
        check = false
      } else {
        this.setState({ confirmPasswordErrorMessage: '' })
        check = true
      }
      return check
    }

    let check = () => {
      console.log('hello')
      let check = formValidation()
      if (
        currentPasswordErrorMessage.length > 0 &&
        newPasswordErrorMessage.length > 0 &&
        confirmPasswordErrorMessage.length > 0 &&
        check
      ) {
        alert('Change password success!')
        this.setState({
          visible: false,
          password: currentPassword,
        })
      }
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#020200', height: Dimensions.get('window').height }}>
        <View style={{ height: 50 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{ position: 'absolute', top: 15, left: 15 }}
          >
            <Feather style={{ color: '#d9d9d9' }} name="x" size={30}></Feather>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: '400', marginLeft: 10 }}>Account Infomation</Text>
          <View style={{ position: 'relative' }}>
            <Image
              style={{ width: '100%', height: 200 }}
              source={{ uri: 'https://i.ytimg.com/vi/HO2MOiB2jtc/maxresdefault.jpg' }}
            ></Image>
            <View style={{ position: 'absolute', bottom: 15, left: 20 }}>
              <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
                {this.state.user.lastname} {this.state.user.firstname}
              </Text>
              <Text style={{ color: 'white', fontSize: 13 }}>Reward-Points: 0</Text>
              <Text style={{ color: 'white', fontSize: 13 }}>Email: {this.state.user.email}</Text>
            </View>
          </View>
          <Text style={{ textAlign: 'center', marginBottom: 30, marginTop: 20, fontSize: 15, color: '#c0c0c0' }}>
            Click to record points
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={{ borderTopColor: '#575755', borderTopWidth: 1, height: 50, justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialCommunityIcons
                    style={{ color: '#5b5b5b', paddingRight: 10 }}
                    name="card-account-details-outline"
                    size={20}
                  ></MaterialCommunityIcons>
                  <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Details</Text>
                </View>
                <MaterialIcons style={{ color: '#c0c0c0' }} size={25} name="keyboard-arrow-right"></MaterialIcons>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Edit', { user: this.state.user })}>
            <View style={{ borderTopColor: '#575755', borderTopWidth: 1, height: 50, justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome style={{ color: '#5b5b5b', paddingRight: 10 }} name="user-o" size={20}></FontAwesome>
                  <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Edit/ Update</Text>
                </View>
                <MaterialIcons style={{ color: '#c0c0c0' }} size={25} name="keyboard-arrow-right"></MaterialIcons>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                visible: true,
              })
            }}
          >
            <View style={{ borderTopColor: '#575755', borderTopWidth: 1, height: 50, justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome style={{ color: '#5b5b5b', paddingRight: 10 }} name="lock" size={20}></FontAwesome>
                  <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Change Password</Text>
                </View>
                <MaterialIcons style={{ color: '#c0c0c0' }} size={25} name="keyboard-arrow-right"></MaterialIcons>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PaymentHistory')}>
            <View style={{ borderTopColor: '#575755', borderTopWidth: 1, height: 50, justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign style={{ color: '#5b5b5b', paddingRight: 10 }} name="reload1" size={20}></AntDesign>
                  <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Payment History</Text>
                </View>
                <MaterialIcons style={{ color: '#c0c0c0' }} size={25} name="keyboard-arrow-right"></MaterialIcons>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={{ borderTopColor: '#575755', borderTopWidth: 1, height: 50, justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons style={{ color: '#5b5b5b', paddingRight: 10 }} name="logout" size={20}></MaterialIcons>
                  <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Log Out</Text>
                </View>
                <MaterialIcons style={{ color: '#c0c0c0' }} size={25} name="keyboard-arrow-right"></MaterialIcons>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Dialog
            visible={this.state.visible}
            dialogAnimation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }
            onTouchOutside={() => {
              this.setState({ visible: false })
            }}
            onHardwareBackPress={() => {
              this.setState({ visible: false })
            }}
            height={Dimensions.get('window').height * 0.5}
            width="95%"
            dialogStyle={{ position: 'absolute', bottom: 0 }}
          >
            <DialogContent>
              <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 16, fontWeight: '600' }}>Change Password</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            visible: false,
                          })
                        }}
                      >
                        <Text style={{ fontSize: 14, color: '#5aac00' }}>Cancel</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={currentPasswordErrorMessage.length > 0 ? { marginTop: 10 } : { marginTop: 30 }}>
                      <View style={{ borderColor: '#575755', borderWidth: 1, borderRadius: 5 }}>
                        <TextInput
                          style={{ height: 40, paddingLeft: 10, color: 'black' }}
                          placeholderTextColor={'black'}
                          placeholder="Current Password *"
                          defaultValue={''}
                          onChangeText={(currentPassword) => this.setState({ currentPassword })}
                        />
                        <TouchableOpacity style={{ position: 'absolute', top: 13, right: 10 }}>
                          <FontAwesome style={{ fontSize: 13, color: '#575755' }} name="eye-slash"></FontAwesome>
                        </TouchableOpacity>
                      </View>
                      {currentPasswordErrorMessage.length > 0 && (
                        <Text style={{ color: '#dc3545' }}>{currentPasswordErrorMessage}</Text>
                      )}
                    </View>

                    <View style={newPasswordErrorMessage.length > 0 ? { marginTop: 10 } : { marginTop: 30 }}>
                      <View style={{ borderColor: '#575755', borderWidth: 1, borderRadius: 5 }}>
                        <TextInput
                          style={{ height: 40, paddingLeft: 10, color: 'black' }}
                          placeholderTextColor={'black'}
                          placeholder="New Password *"
                          defaultValue={''}
                          onChangeText={(newPassword) => this.setState({ newPassword })}
                        />
                        <TouchableOpacity style={{ position: 'absolute', top: 13, right: 10 }}>
                          <FontAwesome style={{ fontSize: 13, color: '#575755' }} name="eye-slash"></FontAwesome>
                        </TouchableOpacity>
                      </View>
                      {newPasswordErrorMessage.length > 0 && (
                        <Text style={{ color: '#dc3545' }}>{newPasswordErrorMessage}</Text>
                      )}
                    </View>
                    <View style={confirmPasswordErrorMessage.length > 0 ? { marginTop: 10 } : { marginTop: 30 }}>
                      <View style={{ borderColor: '#575755', borderWidth: 1, borderRadius: 5 }}>
                        <TextInput
                          style={{ height: 40, paddingLeft: 10, color: 'black' }}
                          placeholderTextColor={'black'}
                          placeholder="Retype New Password *"
                          defaultValue={''}
                          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        />
                        <TouchableOpacity style={{ position: 'absolute', top: 13, right: 10 }}>
                          <FontAwesome style={{ fontSize: 13, color: '#575755' }} name="eye-slash"></FontAwesome>
                        </TouchableOpacity>
                      </View>
                      {confirmPasswordErrorMessage.length > 0 && (
                        <Text style={{ color: '#dc3545' }}>{confirmPasswordErrorMessage}</Text>
                      )}
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 25 }}>
                      <TouchableOpacity
                        onPress={() => {
                          check()
                        }}
                        style={{
                          backgroundColor: '#5aac00',
                          width: 260,
                          paddingVertical: 15,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 4,
                          marginBottom: 50,
                        }}
                      >
                        <Text style={{ color: '#f2ffdf', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                          Change Password
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </DialogContent>
          </Dialog>
        </View>
      </View>
    )
  }
}
