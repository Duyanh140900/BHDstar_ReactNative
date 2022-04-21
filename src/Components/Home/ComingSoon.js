import React, { Component } from 'react'
import { View, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Title from './Title'

export default class ComingSoon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 2,
      entries: [
        {
          hide: false,
          id: 0,
          title: 'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS',
          posterUrl:
            'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002422?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500',
          infoUrl:
            'https://genk.mediacdn.vn/zoom/700_438/2020/1/10/1-1578672272652747982911-crop-15790857118741765780019.jpg',
          theloai: 'Action',
          ngaychieu: '2022-05-06',
          thoiluong: 130,
          ngonngu: 'Tiếng Việt',
          daodien: 'Sam Raimi',
          dienvien: 'Benedict Cumberbatch, Rachel McAdams, Elizabeth Olsen',
          content:
            'Stephen Strange sử dụng một phép thuật bị cấm mở ra cánh cửa đến đa vũ trụ, với sự giúp đỡ của các đồng minh thần bí cả cũ và mới, vượt qua thực tại để đối đầu với 1 kẻ thù mới, bí ẩn ,nguy hiểm và đáng sợ hơn',
        },
        {
          hide: false,
          id: 1,
          title: 'KẺ THỨ BA',
          posterUrl:
            'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002425?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500',
          infoUrl: 'https://i.ytimg.com/vi/PZRMW9vzN68/maxresdefault.jpg',
          theloai: 'Romantic',
          ngaychieu: '2022-05-13',
          thoiluong: 110,
          ngonngu: 'Tiếng Việt',
          daodien: 'Park Hee Jun',
          dienvien: 'Han Jae Suk, Ly Nha Ky',
          content:
            'Phim là câu chuyện về mối tình thơ mộng, lãng mạn.Tuy nhiên, lúc hạnh phúc vừa chớm nở thì biến cố lại bất ngờ ập đến. Một tai nạn giao thông nghiêm trọng, ảnh hưởng đến tính mạng đã xảy ra, đúng lúc lời thoại “tình yêu và cái chết luôn đi liền với nhau”',
        },
        {
          hide: false,
          id: 2,
          title: 'CHICKEN HARE AND THE HAMSTER OF DARKNESS',
          posterUrl:
            'https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002417?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500',
          infoUrl:
            'https://m.media-amazon.com/images/M/MV5BMjkzMDM5NzgtMDgwYi00OGZjLWE4M2UtMDM2ZmU4ZjI4MTU2XkEyXkFqcGdeQXVyMTEwNTM4MDcx._V1_.jpg',
          theloai: 'Animation',
          ngaychieu: '2022-04-29',
          thoiluong: 100,
          ngonngu: 'Tiếng Việt',
          daodien: 'Ben Stassen, Benjamin Mousquet',
          dienvien: 'Danny Fehsenfeld, Mark Irons',
          content:
            'Với cốt truyền đầy hài hước, hành động và bối cảnh hoành tráng Chickenhare And The Hamster là bộ phim hoạt hình phiêu lưu hoàn hảo dành cho gia đình dịp Hè 2022 này.',
        },
        {
          hide: false,
          id: 3,
          title: 'FIRE STARTERS',
          posterUrl:
            'http://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002430?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500',
          infoUrl: 'https://i.ytimg.com/vi/AojP3Z5hAII/maxresdefault.jpg',
          theloai: 'Horror',
          ngaychieu: '2022-05-13',
          thoiluong: 120,
          ngonngu: 'Tiếng Việt',
          daodien: 'Keith Thomas',
          dienvien: 'Zac Efron, Ryan Kiera Armstrong, Kurtwood Smith',
          content:
            'Phim kể về một cô gái trẻ cố gắng hiểu làm thế nào cô ấy có được sức mạnh để đốt cháy mọi thứ bằng tâm trí của mình một cách bí ẩn.',
        },
        {
          hide: false,
          id: 4,
          title: 'TOP GUN MAVERICK',
          posterUrl:
            'http://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002439?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500',
          infoUrl: 'https://i.ytimg.com/vi/giXco2jaZ_4/maxresdefault.jpg',
          theloai: 'Action',
          ngaychieu: '2022-05-27',
          thoiluong: 120,
          ngonngu: 'Tiếng Việt',
          daodien: 'Joseph Kosinski',
          dienvien: 'TOM CRUISE, Jennifer Connelly, Miles Teller Teller',
          content:
            'Sau hơn ba mươi năm phục vụ với tư cách là một trong những phi công hàng đầu của Hải quân, Pete vẫn là một phi công thử nghiệm can đảm né tránh sự thăng tiến trong cấp bậc vì điều đó sẽ giữ anh ở lại mặt đất.',
        },
      ],
      activeSlide: 0,
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ marginTop: 0 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Infomation', { item: item })}>
          <ImageBackground
            source={{ uri: item.posterUrl }}
            style={{
              width: 180,
              height: Dimensions.get('window').height * 0.36,
              resizeMode: 'cover',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{ borderRadius: 6 }}
          />
          {this.state.activeSlide === item.id && <Title title={item.title} />}
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const sliderWidth = Dimensions.get('window').width
    const itemHeight = Dimensions.get('window').height
    return (
      <View style={{ backgroundColor: '#020200', height: '100%', paddingTop: 10 }}>
        <Carousel
          ref={(c) => {
            this._carousel = c
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={200}
          itemWidth={180}
          itemHeight={260}
          onLayout={(index) => this.setState({ activeSlide: this.state.id })}
          onSnapToItem={(index) => this.setState({ activeSlide: index, id: index })}
          firstItem={2}
          activeSlideOffset={10}
        />
      </View>
    )
  }
}
