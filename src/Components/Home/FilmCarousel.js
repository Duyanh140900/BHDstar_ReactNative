import React, { Component,useState } from "react"
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from "react-native"
import { log } from "react-native-reanimated"

const OFFSET = 110
const ITEM_WIDTH = Dimensions.get("window").width - (OFFSET * 2)
const ITEM_HEIGHT = 300

const cardsOld = [
  { id:1, title: "Movie 1", posterUrl: require("./image/1.png") },
  { id:2,title: "Movie 2", posterUrl: require("./image/2.png") },
  { id:3,title: "Movie 3", posterUrl: require("./image/3.png") },
  { id:4,title: "Movie 4", posterUrl: require("./image/4.png") },
]

export default function FilmCarousel(navigation) {
  const scrollX = React.useRef(new Animated.Value(0)).current
  console.log(navigation);
  const [cards, setCards] = useState(cardsOld);
  const coppy = ()=>{
      let _cards = [...cards,...cardsOld]
    setCards(_cards)
  }
  const onMomentumScrollEnd = ()=>{
  }
  return (
    <SafeAreaView>
      <ScrollView
      onMomentumScrollEnd = {onMomentumScrollEnd}
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={ITEM_WIDTH}
        style={{ marginTop: 40, paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        centerContent={true}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )
        }

        scrollEventThrottle={10}
        snapToEnd={false}
        snapToStart={false}
      >
        {cards.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ]

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          })

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
            <TouchableOpacity onPress={()=> props.navigation.navigate("Infomation")}>
            <View>
            <ImageBackground
                source={item.posterUrl}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 6}}
              />
              <View style={{alignItems:"center"}}>
              <Text style={{color:"#f3f3f1", fontSize:20, fontWeight:"bold", marginTop:10, display: (`${scrollX}`) ? "flex" :"none" }}>{item.title}</Text>
              </View>
            </View>
              
              </TouchableOpacity>
            </Animated.View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}