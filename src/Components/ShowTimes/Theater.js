import { Text, View, SafeAreaView, FlatList, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Theater extends Component {
  render() {
    const { item } = this.props
    const {height, width} = Dimensions.get('window');
    const renderItem = ({ item }) => {
      return (
        <View style={{ marginBottom: 20, flexDirection: "row", marginLeft:5, flex:1}}>
          <Image style={{ width: 120, height: 100, resizeMode: "cover", marginRight: 20 }} source={{ uri: item.image }}></Image>
          <View style={{flex:1}}>
            <Text style={{ color: "white", marginBottom: 10, fontSize: 15, fontWeight: "400" }}>BHD Star {item.name}</Text>
            <View style={{ flexDirection: "row"}}>
              <MaterialIcons name='place' size={17} style={{ color: "#c2c3c0" }}></MaterialIcons>
              <Text style={{ color: "#c2c3c0", fontSize: 13, flex:1 }}>{item.place}</Text>
            </View>
          </View>
        </View>
      );
    };
    return (
      <View style={{ backgroundColor: '#020200', height:height, paddingBottom:400}}>
          <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
      </View>
    )
  }
}