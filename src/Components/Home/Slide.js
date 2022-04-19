import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SliderBox } from "react-native-image-slider-box";

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-JJK-combo-1.jpeg",
            "https://www.bhdstar.vn/wp-content/uploads/2018/03/App.jpg",
            "https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png",
          ]
        };
      }

      render() {
        return (
            <SliderBox images={this.state.images} 
                 sliderBoxHeight={150}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#fffdff"
  inactiveDotColor="#f3f2f3"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  imageLoadingColor="#2196F3"
            />
        )
      }
}