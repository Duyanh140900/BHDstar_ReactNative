import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SliderBox } from "react-native-image-slider-box";

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image        // Local image
          ]
        };
      }

      render() {
        return (
            <SliderBox images={this.state.images} 
                 sliderBoxHeight={130}
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