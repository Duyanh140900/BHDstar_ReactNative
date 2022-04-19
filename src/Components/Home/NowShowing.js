import React, { Component } from "react"
import { View, Dimensions, ImageBackground, Text, TouchableOpacity, Button, ScrollView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Title from "./Title";

export default class NowShowing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [
        { id: 0, title: "Ê ÔNG GIÀ, YÊU HA", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002420?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500'},
        { id: 1, title: "SONIC: THE HEDGEHOG 2", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002421?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
        { id: 2, title: "MỸ NHÂN THẦN SÁCH", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002423?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
        { id: 3, title: "QUA BỂN LÀM CHI", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002418?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
      ]
    }
  }



  _renderItem = ({ item, index }) => {
    return <View style={{ marginTop: 70 }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Infomation",{item:item})}>
        <ImageBackground
          source={{uri:item.posterUrl}}
          style={{
            width: 180,
            height: 260,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center"
          }}
          imageStyle={{ borderRadius: 6 }}
        />
        {this.state.activeSlide === item.id && <Title title={item.title}/>}
      </TouchableOpacity>
    </View>
  }

  render() {
    const sliderWidth = Dimensions.get('window').width;
    const itemHeight = Dimensions.get('window').height;
    return (
      <View style={{ backgroundColor: '#020200',alignItems:"center"}}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={200}
          itemWidth={180}
          itemHeight={260}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        >
        </Carousel>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Booking')} style={{
          backgroundColor: "#5aac00", width:260, paddingVertical: 15, flexDirection: "row", justifyContent: "center",
          alignItems: "center", borderRadius: 4
        }}>
          <Ionicons name="receipt-outline" size={15} style={{ marginRight: 5, color: "#f2ffdf" }}></Ionicons>
          <Text style={{ color: "#f2ffdf", fontSize: 16, fontWeight: "bold" }}>Booking</Text>
        </TouchableOpacity>
        <View style={{padding:1000,backgroundColor: '#020200'}}></View>
      </View>

    );
  }
}