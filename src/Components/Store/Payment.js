import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import CheckBox from '@react-native-community/checkbox'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog'
import GifImage from '@lowkey/react-native-gif'

export default class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMoca: false,
      isMomo: false,
      isAtm: false,
      isVisa: false,
      check: false,
      visible: false,
    }
  }

  render() {
    const { listStore, total } = this.props.route.params
    console.log(total)

    let getItem = () => {
      let result = []
      listStore.map((item) => {
        if (item.number > 0) {
          result.push(item)
        }
      })
      return result
    }

    let listItem = getItem()

    console.log(listItem)

    const { isMoca, isMomo, isAtm, isVisa, check, visible } = this.state

    let checkFinish = () => {
      if (check) {
        if (isMoca && !isMomo && !isAtm && !isVisa) {
          return true
        }
        if (!isMoca && isMomo && !isAtm && !isVisa) {
          return true
        }
        if (!isMoca && !isMomo && isAtm && !isVisa) {
          return true
        }
        if (!isMoca && !isMomo && !isAtm && isVisa) {
          return true
        }
      }
      return false
    }

    console.log(checkFinish())

    let setMoca = () => {
      this.setState({
        isMoca: true,
        isMomo: false,
        isAtm: false,
        isVisa: false,
      })
    }
    let setMomo = () => {
      this.setState({
        isMoca: false,
        isMomo: true,
        isAtm: false,
        isVisa: false,
      })
    }
    let setAtm = () => {
      this.setState({
        isMoca: false,
        isMomo: false,
        isAtm: true,
        isVisa: false,
      })
    }
    let setVisa = () => {
      this.setState({
        isMoca: false,
        isMomo: false,
        isAtm: false,
        isVisa: true,
      })
    }
    let setCheck = () => {
      this.setState({
        check: !check,
      })
    }

    return (
      <View style={{ height: '100%', backgroundColor: '#020200' }}>
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ marginRight: 20 }}>
                <Feather style={{ color: '#e2e2e0' }} name="arrow-left" size={23}></Feather>
              </TouchableOpacity>
              <Text style={{ color: '#e2e2e0', fontSize: 16 }}>More</Text>
            </View>
            <View>
              <Text style={{ color: '#df4b4e' }}></Text>
            </View>
          </View>

          <ScrollView style={{ height: '65%' }}>
            <View style={{ borderBottomColor: '#575755', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 5, color: '#ffffff' }}>Cart</Text>
              <Text style={{ fontSize: 15, marginBottom: 15, color: '#c3c3c3' }}>Tại rạp BHD Star Discovery</Text>
            </View>

            <View style={{ borderBottomColor: '#575755', borderBottomWidth: 1, marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginBottom: 15, color: '#ffffff' }}>Items Ordered</Text>
              {listItem.map((item) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 15,
                      flex: 1,
                    }}
                  >
                    <View style={{ flex: 0.7 }}>
                      <Text style={{ color: '#c3c3c3' }}>
                        {item.number} X {item.name}
                      </Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                      <Text style={{ textAlign: 'right', color: '#ffffff', fontSize: 15 }}>
                        {item.price * item.number} đ
                      </Text>
                    </View>
                  </View>
                )
              })}
            </View>

            <View style={{ borderBottomColor: '#575755', borderBottomWidth: 1, marginBottom: 5 }}>
              <Text style={{ fontSize: 15, marginBottom: 20, marginTop: 15, color: '#858583' }}>Payment Methods</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
                  <Image
                    style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 6, marginRight: 10 }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7SPeZHep-fv1d3vOTLdc0VhbR2ZEjXTMg&usqp=CAU',
                    }}
                  ></Image>
                  <Text style={{ color: '#bcbcbc' }}>Ví Moca trên ứng dụng Grap</Text>
                </View>
                <CheckBox value={isMoca} onValueChange={setMoca} tintColors={{ false: '#bcbcbc' }} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
                  <Image
                    style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 6, marginRight: 10 }}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png' }}
                  ></Image>
                  <Text style={{ color: '#bcbcbc' }}>Ví Momo</Text>
                </View>
                <CheckBox value={isMomo} onValueChange={setMomo} tintColors={{ false: '#bcbcbc' }} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
                  <Image
                    style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 6, marginRight: 10 }}
                    source={{
                      uri: 'https://img.freepik.com/free-vector/realistic-debit-card-mockup_23-2149268530.jpg',
                    }}
                  ></Image>
                  <Text style={{ color: '#bcbcbc' }}>Thẻ ATM nội địa (Internet Banking)</Text>
                </View>
                <CheckBox value={isAtm} onValueChange={setAtm} boxType={'circle'} tintColors={{ false: '#bcbcbc' }} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
                  <Image
                    style={{ width: 40, height: 40, resizeMode: 'contain', borderRadius: 6, marginRight: 10 }}
                    source={{
                      uri: 'https://www.milfordbank.com/wp-content/uploads/2014/08/credit-card-and-debit-card-495x375.jpg',
                    }}
                  ></Image>
                  <Text style={{ color: '#bcbcbc' }}>Thẻ quốc tế (Vista, Master, Amex, JCB</Text>
                </View>
                <CheckBox value={isVisa} onValueChange={setVisa} tintColors={{ false: '#bcbcbc' }} />
              </View>
            </View>

            <View>
              <Text style={{ marginBottom: 20, marginTop: 20, fontSize: 15, color: '#858583' }}>Pickup Date</Text>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                  <Image
                    style={{
                      marginRight: 10,
                      width: 40,
                      height: 40,
                      resizeMode: 'contain',
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x08ckYRnfb4rbBjjN99tKmGH53j1UTaOcg&usqp=CAU',
                    }}
                  ></Image>
                  <Text style={{ color: '#bcbcbc' }}>19 tháng 04, 2022</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      marginRight: 10,
                      width: 40,
                      height: 40,
                      resizeMode: 'contain',
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                    source={{
                      uri: 'https://5.imimg.com/data5/XB/KU/GC/SELLER-27682289/warning-sign-board-500x500.jpg',
                    }}
                  ></Image>
                  <Text style={{ flex: 1, color: '#bcbcbc' }}>
                    Please be aware that order is only valid for the duration of the day of issue
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ height: '25%' }}>
          <View
            style={{
              height: '20%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 15, color: '#858583' }}>Subtotal/ Grand Total</Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>{total} đ</Text>
          </View>
          <View style={{ height: '70%', backgroundColor: '#292929', alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{ flexDirection: 'row', marginHorizontal: 40, justifyContent: 'center', alignItems: 'center' }}
            >
              <CheckBox value={check} onValueChange={setCheck} />
              <Text style={{ color: '#f2f2f2' }}>
                Tôi đã đọc, hiểu và đồng ý với các{' '}
                <Text style={{ color: '#6a9d26', borderBottomWidth: 1, borderBottomColor: '#6a9d26' }}>điều khoản</Text>
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    visible: true,
                  })
                }}
                disabled={checkFinish() ? false : true}
                style={
                  checkFinish()
                    ? {
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#62a125',
                        width: 320,
                        height: 50,
                        borderRadius: 6,
                      }
                    : {
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#838383',
                        width: 320,
                        height: 50,
                        borderRadius: 6,
                      }
                }
              >
                <Text style={{ color: '#fefefe' }}>Finish Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
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
                textStyle={{ color: 'white', fontSize: 16, fontWeight: '400' }}
                onPress={() => {
                  this.setState(
                    {
                      visible: false,
                    },
                    () =>
                      setTimeout(() => {
                        this.props.navigation.navigate('TabRoutes')
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
              <Text style={{ textAlign: 'center', alignContent: 'center', color: 'white' }}>pay successfully</Text>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
