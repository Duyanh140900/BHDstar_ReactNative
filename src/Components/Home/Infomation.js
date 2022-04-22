import { Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Infomation extends Component {
  render() {
    const { item, id, entries, place } = this.props.route.params
    console.log(item.theloai.length)
    return (
      <SafeAreaView>
        <View style={{ backgroundColor: '#020200', height: '100%' }}>
          <View>
            <Image style={{ width: '100%', height: 200, resizeMode: 'cover' }} source={{ uri: item.infoUrl }}></Image>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                backgroundColor: 'rgba(85,59,48,0.7)',
                borderRadius: 50,
                padding: 5,
              }}
            >
              <Feather style={{ color: '#d9d9d9' }} name="arrow-left" size={23}></Feather>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{ padding: 20 }}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.7 }}>
                  <Text
                    style={[
                      styles.info,
                      item.theloai.length > 30 ? { color: 'red', fontSize: 15 } : { color: '#757574', fontSize: 15 },
                    ]}
                  >
                    {item.theloai}
                  </Text>
                  <Image style={{ height: 20, width: 60, resizeMode: 'cover' }} source={require('./image/stars.png')} />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, flex: 0.3 }}>
                  <FontAwesome style={{ color: '#575755', paddingRight: 5 }} name="clock-o" size={18}></FontAwesome>
                  <Text style={[styles.info, { fontSize: 13 }]}>{item.thoiluong} minutes</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#232321',
                  paddingBottom: 10,
                  marginBottom: 20,
                }}
              >
                <Text style={styles.title_info}>Description</Text>
                <Text style={styles.content}>{item.content}</Text>
              </View>
              <View style={{ borderBottomWidth: 1, borderBottomColor: '#232321', paddingBottom: 20, marginBottom: 20 }}>
                <View style={styles.disFlex}>
                  <Text style={styles.title_infoFlex}>Released Date</Text>
                  <Text style={styles.infoFlex}>{item.ngaychieu}</Text>
                </View>
                <View style={styles.disFlex}>
                  <Text style={styles.title_infoFlex}>Rating</Text>
                  <Text style={[styles.infoFlex, { color: 'red' }]}>C16 - No Children Under 16 Years Old</Text>
                </View>
                <View style={styles.disFlex}>
                  <Text style={styles.title_infoFlex}>Languages</Text>
                  <Text style={styles.infoFlex}>Phụ đề {item.ngonngu}</Text>
                </View>
                <View style={styles.disFlex}>
                  <Text style={styles.title_infoFlex}>Screen</Text>
                </View>
              </View>
              <View>
                <Text style={[styles.title_info, { marginBottom: 5 }]}>Director</Text>
                <Text style={[styles.info, { marginBottom: 10 }]}>{item.daodien}</Text>
                <Text style={[styles.title_info, { marginBottom: 5 }]}>Cast</Text>
                <Text style={styles.info}>{item.dienvien}</Text>
              </View>
            </View>
          </ScrollView>
          {item.hide && (
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Booking', {
                    id: id,
                    entries: entries,
                    place: place,
                  })
                }
                style={{
                  backgroundColor: '#5aac00',
                  width: 360,
                  paddingVertical: 15,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                }}
              >
                <Ionicons name="receipt-outline" size={15} style={{ marginRight: 5, color: '#f2ffdf' }}></Ionicons>
                <Text style={{ color: '#f2ffdf', fontSize: 16, fontWeight: 'bold' }}>Booking</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: '#f4f4f4',
  },
  content: {
    fontSize: 14,
    color: '#757574',
  },
  rating: {
    fontSize: 16,
    color: '#b94146',
  },
  info: {
    fontSize: 16,
    color: '#757574',
  },
  title_info: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f4f4f4',
  },
  disFlex: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  infoFlex: {
    fontSize: 16,
    color: '#757574',
    flex: 1.5,
  },
  title_infoFlex: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f4f4f4',
    flex: 1,
  },
})
