import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Booking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choseDate: 0,
      choseCity: 0,
    }
  }
  renderDate = ({ item, index }) => {
    return this.state.choseDate == item.id ? (
      <TouchableOpacity>
        <View
          style={{
            padding: 10,
            margin: 5,
            backgroundColor: '#5aac00',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '900' }}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            choseDate: item.id,
          })
        }}
      >
        <View
          style={{
            padding: 10,
            margin: 5,
            backgroundColor: '#020200',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: '#b6b6b4', fontSize: 18, fontWeight: '900' }}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderCity = ({ item, index }) => {
    return this.state.choseCity == item.id ? (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            width: 100,
            margin: 5,
            backgroundColor: '#5aac00',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '900' }}>{item.city}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            choseCity: item.id,
          })
        }}
      >
        <View
          style={{
            width: 100,
            margin: 5,
            backgroundColor: '#020200',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            borderColor: '#b6b6b4',
            borderWidth: 1,
          }}
        >
          <Text style={{ color: '#b6b6b4', fontSize: 18, fontWeight: '900' }}>{item.city}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderRap = ({ item, index }) => {
    return (
      <View
        style={{
          borderBottomColor: '#b6b6b4',
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'center',
            height: 50,
          }}
        >
          <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}>BHD Star {item}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons style={{ color: '#b6b6b4' }} size={12} name="place"></MaterialIcons>
            <Text style={{ color: '#b6b6b4' }}>1.0 km</Text>
          </View>
        </View>
      </View>
    )
  }
  render() {
    const { id, entries, place } = this.props.route.params
    const { choseCity, choseDate } = this.state
    const item = entries[id]

    let getRap = () => {
      const intersection = item.date[choseDate].rap.filter((element) => place[choseCity].rap.includes(element))
      return intersection
    }

    const raps = getRap()
    console.log(raps)
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

          <View style={{ marginHorizontal: 15 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>{item.title}</Text>
              <View
                style={{
                  color: '#853330',
                  borderColor: 'red',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: 'red' }}>C16</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 2, marginBottom: 3 }}>
              <FontAwesome style={{ color: '#575755', paddingRight: 5 }} name="clock-o" size={22}></FontAwesome>
              <Text style={{ color: '#575755', paddingRight: 5 }}>100 minutes</Text>
            </View>

            <View>
              <View style={{ marginBottom: 20 }}>
                <FlatList
                  horizontal
                  pagingEnabled={true}
                  data={entries[id].date}
                  renderItem={(item) => this.renderDate(item)}
                />
              </View>

              <View
                style={
                  raps.length > 0
                    ? { paddingBottom: 20, borderBottomColor: '#b6b6b4', borderBottomWidth: 1 }
                    : { paddingBottom: 20 }
                }
              >
                <FlatList horizontal data={place} renderItem={(item) => this.renderCity(item)} />
              </View>
              <View>
                <FlatList
                  style={{ height: Dimensions.get('window').height * 0.3 }}
                  data={raps}
                  renderItem={(item) => this.renderRap(item)}
                />
              </View>
            </View>
          </View>
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
