import React, { Component } from "react"
import { View, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Title from "./Title";

export default class ComingSoon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [
        { id: 0, title: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002422?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
        { id: 1, title: "KẺ THỨ BA", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002425?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
        { id: 2, title: "CHICKEN HARE AND THE HAMSTER OF DARKNESS", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002417?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
        { id: 3, title: "NGHỀ SIÊU DỄ", posterUrl: 'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002416?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500' },
      ],
      activeSlide:0
    }
    
  }



  _renderItem = ({ item, index,  }) => {
    return <View style={{ marginTop: 0 }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Infomation",{item:item})}>
        <ImageBackground
          source={{uri:item.posterUrl}}
          style={{
            width: 180,
            height: Dimensions.get("window").height * 0.36,
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
      <View style={{ backgroundColor: '#020200', height:"100%", paddingTop:10 }}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={200}
          itemWidth={180}
          itemHeight={260}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />

      </View>

    );
  }
}