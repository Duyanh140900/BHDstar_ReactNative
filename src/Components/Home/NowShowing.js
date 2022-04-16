import React, { Component } from "react"
import { View, Dimensions, ImageBackground, Text, TouchableOpacity, Button } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class NowShowing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [
        { id: 0, title: "Movie 1", posterUrl: require("./image/1.png") },
        { id: 1, title: "Movie 2", posterUrl: require("./image/2.png") },
        { id: 2, title: "Movie 3", posterUrl: require("./image/3.png") },
        { id: 3, title: "Movie 4", posterUrl: require("./image/4.png") },
      ]
    }
  }



  _renderItem = ({ item, index }) => {
    return <View style={{ marginTop: 70 }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Infomation")}>
        <ImageBackground
          source={item.posterUrl}
          style={{
            width: 170,
            height: 230,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center"
          }}
          imageStyle={{ borderRadius: 6 }}
        />
        {this.state.activeSlide === item.id && <View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "#e9e9e7", fontSize: 20, fontWeight: "bold", marginTop: 10 }}>{item.title}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <FontAwesome style={{ color: "#575755", paddingRight: 5 }} name='clock-o' size={22}></FontAwesome>
            <Text style={{ color: "#575755", paddingRight: 5 }}>100 minutes</Text>
            <View style={{ color: "#853330", borderColor: "red", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}>
              <Text style={{ color: "red" }}>C16</Text>
            </View>
          </View>
        </View>}
      </TouchableOpacity>
    </View>
  }

  render() {
    const sliderWidth = Dimensions.get('window').width;
    const itemHeight = Dimensions.get('window').height;
    return (
      <View style={{ backgroundColor: '#020200', height: '100%' }}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={200}
          itemWidth={200}
          itemHeight={itemHeight}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Booking')} style={{
          backgroundColor: "#5aac00", paddingHorizontal: 80, paddingVertical: 15,
          position: "absolute", top: "52%", left: "21%", flexDirection: "row", justifyContent: "center",
          alignItems: "center", borderRadius: 4
        }}>
          <Ionicons name="receipt-outline" size={15} style={{ marginRight: 5, color: "#f2ffdf" }}></Ionicons>
          <Text style={{ color: "#f2ffdf", fontSize: 16, fontWeight: "bold" }}>Booking</Text>
        </TouchableOpacity>
      </View>

    );
  }
}