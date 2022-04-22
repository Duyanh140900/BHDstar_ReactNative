import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Image, View, Text } from 'react-native'
import Theater from '../Components/ShowTimes/Theater'

const Tab = createMaterialTopTabNavigator()

export default class TheaterTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HCM: [
        {
          image: 'https://images.foody.vn/res/g23/222720/prof/s576x330/foody-mobile-t1-jpg-153-635950295317069612.jpg',
          name: 'Lê Văn Việt',
          place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',
        },
        {
          image: 'https://rapchieuphim.com/photos/3/rap-bhd-star-quang-trung.jpg',
          name: 'Quang Trung',
          place: 'Tầng B1 & B2, Vincom Plaza Quang Trung, 190 Quang Trung, P.10, Quận Gò Vấp, Tp.HCM',
        },
        {
          image:
            'https://images.foody.vn/res/g94/938596/prof/s640x400/foody-upload-api-foody-mobile-xem-phim-mien-phi-ta-200427164449.jpg',
          name: 'Thảo Điền',
          place: 'Tầng 5, Vincom Mega Mall Thảo Điền, 159 Xa Lộ Hà Nội, P.Thảo Điền, Quận 2, TPHCM',
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sJEwNoiNXRSR2lOxiE-vrFaP31kSxzNZvgd1m2x4tS9KA47zpbOD1P8d7pnUkWFkCEA&usqp=CAU',
          name: '3.2',
          place: 'Tầng 5, Vincom Plaza 3/2, 3C Đường 3 Tháng 2, P.11, Quận 10, TPHCM',
        },
        {
          image: 'https://booking.bhdstar.vn/CDN/Image/Entity/CinemaGallery/0000000003?width=1024&height=316',
          name: 'Phạm Hùng',
          place: ' Tầng 4, TTTM Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh, TPHCM.',
        },
      ],

      LongKhanh: [
        {
          image: 'https://booking.bhdstar.vn/CDN/Image/Entity/CinemaGallery/0000000011?width=1024&height=316',
          name: 'LONG KHÁNH',
          place: '430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai',
        },
      ],
      Hue: [
        {
          image: 'https://reviewphimaz.com/wp-content/uploads/2018/07/rap-chieu-phim-bhd-star-hue.jpg',
          name: 'HUẾ',
          place: 'Tầng 5, Vincom Plaza Huế, 50A Hùng Vương tổ 10, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế',
        },
      ],
      Hanoi: [
        {
          image:
            'https://images.foody.vn/res/g94/938596/prof/s640x400/foody-upload-api-foody-mobile-xem-phim-mien-phi-ta-200427164449.jpg',
          name: 'DISCOVERY',
          place: 'Tầng 8, TTTM Discovery – 302 Cầu Giấy, P.Dịch Vọng, Quận Cầu Giấy, Hà Nội',
        },
        {
          image: 'https://lh3.googleusercontent.com/p/AF1QipOZ5WYHQzd9622YZqluFDZJQcrCvZ0DUVKalqhM=s1600-w400',
          name: 'The Garden',
          place: 'Tầng 4, TTTM Garden Shopping Center, Phố Mễ Trì, P.Mỹ Đình 1, Quận Nam Từ Liêm, Hà Nội',
        },
        {
          image: 'https://rapchieuphim.com/photos/3/rap-bhd-star-quang-trung.jpg',
          name: 'Phạm Ngọc Thạch',
          place: 'Tầng 8, Vincom Center Phạm Ngọc Thạch, 02 Phạm Ngọc Thạch, P.Trung Tự, Quận Đống Đa, Hà Nội',
        },
      ],
    }
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName={'HOME'}
        screenOptions={{
          headerShown: false,
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
            height: 0,
          },
          tabBarStyle: {
            backgroundColor: '#020200',
            height: 80,
            justifyContent: 'space-between',
          },
          tabBarShowLabel: false,

          tabBarItemStyle: {
            width: 125,
            height: 60,
            justifyContent: 'center',
          },
          tabBarContentContainerStyle: {
            padding: 0,
            margin: 0,
          },
          tabBarIconStyle: {
            width: 110,
          },
        }}
      >
        <Tab.Screen
          name={'HOME'}
          children={() => <Theater item={this.state.HCM} />}
          options={{
            tabBarIcon: (focused) => {
              return focused.focused == true ? (
                <View
                  style={{
                    borderColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    backgroundColor: '#5aac02',
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>TPHCM</Text>
                </View>
              ) : (
                <View
                  style={{
                    borderColor: '#aeafad',
                    borderWidth: 1,
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 6,
                    backgroundColor: '#0e0e0e',
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>TPHCM</Text>
                </View>
              )
            },
          }}
        />
        <Tab.Screen
          name={'SHOWTIMES'}
          children={() => <Theater item={this.state.LongKhanh} />}
          options={{
            tabBarIcon: (focused) => {
              return focused.focused == true ? (
                <View
                  style={{
                    borderColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    backgroundColor: '#5aac02',
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Đồng Nai</Text>
                </View>
              ) : (
                <View
                  style={{
                    borderColor: '#aeafad',
                    borderWidth: 1,
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 6,
                    backgroundColor: '#0e0e0e',
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Đồng Nai</Text>
                </View>
              )
            },
          }}
        />
        <Tab.Screen
          name={'STORE'}
          children={() => <Theater item={this.state.Hue} />}
          options={{
            tabBarIcon: (focused) => {
              return focused.focused == true ? (
                <View
                  style={{
                    borderColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    backgroundColor: '#5aac02',
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Huế</Text>
                </View>
              ) : (
                <View
                  style={{
                    borderColor: '#aeafad',
                    borderWidth: 1,
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 6,
                    backgroundColor: '#0e0e0e',
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Huế</Text>
                </View>
              )
            },
          }}
        />
        <Tab.Screen
          name={'PERSONAL'}
          children={() => <Theater item={this.state.Hanoi} />}
          options={{
            tabBarIcon: (focused) => {
              return focused.focused == true ? (
                <View
                  style={{
                    borderColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    backgroundColor: '#5aac02',
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Hà Nội</Text>
                </View>
              ) : (
                <View
                  style={{
                    borderColor: '#aeafad',
                    borderWidth: 1,
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 6,
                    backgroundColor: '#0e0e0e',
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Hà Nội</Text>
                </View>
              )
            },
          }}
        />
      </Tab.Navigator>
    )
  }
}
