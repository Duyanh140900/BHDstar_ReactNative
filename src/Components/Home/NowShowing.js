import React, { Component } from 'react'
import { View, Dimensions, ImageBackground, Text, TouchableOpacity, Button, ScrollView } from 'react-native'
import { log } from 'react-native-reanimated'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Title from './Title'

export default class NowShowing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 3,
      entries: [
        {
          hide: true,
          id: 0,
          title: 'Ê ÔNG GIÀ, YÊU HA',
          posterUrl: require('./image/film/eonggia.jpg'),
          date: [
            {
              id: 0,
              time: '21',
              rap: [
                'Lê Văn Việt',
                'Quang Trung',
                'Thảo Điền',
                '3.2',
                'Phạm Hùng',
                'Phạm Ngọc Thạch',
                'The Garden',
                'Long Khánh',
              ],
            },
            { id: 1, time: '22', rap: [] },
            { id: 2, time: '23', rap: [] },
            { id: 3, time: '24', rap: [] },
          ],
          infoUrl: 'https://i.ytimg.com/vi/WYrV5Npz3vo/maxresdefault.jpg',
          theloai: 'Romance',
          ngaychieu: '2022-04-15',
          thoiluong: 90,
          ngonngu: 'Tiếng Việt',
          daodien: 'Đỗ Cường',
          dienvien: 'Ribi Sachi, Trương Minh Thảo, Kiều Oanh',
          content:
            'Câu chuyện về cô hộ lý tên Hà nhận chăm sóc Kha - 1 bệnh nhân nam bị trầm cảm. Một quá trình đồng hành của Hà giúp Kha thoát bệnh qua lăng kính hài hước, nhẹ nhàng và dí dỏm...',
        },
        {
          hide: true,
          id: 1,
          title: 'SONIC: THE HEDGEHOG 2',
          posterUrl: require('./image/film/sonic.jpg'),
          date: [
            {
              id: 0,
              time: '21',
              rap: [
                'Lê Văn Việt',
                'Quang Trung',
                'Thảo Điền',
                'Long Khánh',
                '3.2',
                'Phạm Hùng',
                'Phạm Ngọc Thạch',
                'Huế',
              ],
            },
            {
              id: 1,
              time: '22',
              rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Long Khánh', '3.2', 'Phạm Hùng', 'Phạm Ngọc Thạch'],
            },
            { id: 2, time: '23', rap: [] },
            { id: 3, time: '24', rap: [] },
          ],
          infoUrl: 'https://image.tmdb.org/t/p/original/8sHqW2AW7y0TAvJbPQdmk1PTDuS.jpg',
          theloai: 'P - PHIM PHỔ BIẾN CHO MỌI LỨA TUỔI',
          ngaychieu: '2022-04-15',
          thoiluong: 122,
          ngonngu: 'Tiếng Việt',
          daodien: 'Jeff Fowler',
          dienvien: "Ben Schwartz, James Marsden, Colleen O'Shaughnessey",
          content:
            'Khi Robotnik tìm cách quay trở về Trái Đất thành công, ông ta có một đồng minh mới là Knuckles hùng mạnh, liệu Sonic và người bạn ới Tails có thể ngăn chặn được âm mưu điên rồi để cứu lấy thế giới?',
        },
        {
          hide: true,
          id: 2,
          title: 'MỸ NHÂN THẦN SÁCH',
          posterUrl: require('./image/film/minhan.jpg'),
          date: [
            {
              id: 0,
              time: '21',
              rap: [
                'Lê Văn Việt',
                'Quang Trung',
                'Thảo Điền',
                'Long Khánh',
                '3.2',
                'Phạm Hùng',
                'Phạm Ngọc Thạch',
                'The Garden',
              ],
            },
            { id: 1, time: '22', rap: [] },
            { id: 2, time: '23', rap: [] },
            { id: 3, time: '24', rap: [] },
          ],
          infoUrl: 'https://i.ytimg.com/vi/LSnc5yULpbY/maxresdefault.jpg',
          theloai: 'Comedy',
          ngaychieu: '2022-04-15',
          thoiluong: 85,
          ngonngu: 'Tiếng Việt',
          daodien: 'Nguyễn Tường Nguyên Phương',
          dienvien: 'Minh Beta, Việt Linh, NANON NANON',
          content:
            'Mỹ nhân thần sách là câu chuyện của những người trẻ dễ dàng bắt gặp trong cuộc sống hiện đại. Thông qua những cú “twist” kết hợp tình tiết phim, nhà sản xuất lồng ghép các ẩn ý nhiều tầng nghĩa.',
        },
        {
          hide: true,
          id: 3,
          title: 'QUA BỂN LÀM CHI',
          posterUrl: require('./image/film/quaben.jpg'),
          date: [
            { id: 0, time: '21', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Long Khánh'] },
            { id: 1, time: '22', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Discovery'] },
            { id: 2, time: '23', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
            { id: 3, time: '24', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
          ],
          infoUrl: 'https://i.ytimg.com/vi/-3ilWnV-02s/maxresdefault.jpg',
          theloai: 'Drama',
          ngaychieu: '2022-04-08',
          thoiluong: 91,
          ngonngu: 'Tiếng Việt',
          daodien: 'Nguyễn Trung Cang',
          dienvien: 'Quang Minh, Thuan Nguyen, Phương Titi, Duy Khánh',
          content:
            'Câu chuyện về cuộc hành trình đến Mỹ của 1 du học sinh con nhà khá giả, cùng 1 phi vụ kết hôn giả để giúp cô gái có tiền trả nợ và chàng trai có thể định cư lâu dài tại Mỹ. Liệu phi vụ này có thành công hay không?',
        },
        {
          hide: true,
          id: 4,
          title: 'MIDNIGHT',
          posterUrl: require('./image/film/midnight.jpg'),
          date: [
            {
              id: 0,
              time: '21',
              rap: [
                'Lê Văn Việt',
                'Quang Trung',
                'Thảo Điền',
                'Long Khánh',
                '3.2',
                'Phạm Hùng',
                'Phạm Ngọc Thạch',
                'Huế',
              ],
            },
            { id: 1, time: '22', rap: ['3.2', 'Phạm Ngọc Thạch', 'Huế'] },
            { id: 2, time: '23', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
            { id: 3, time: '24', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
          ],
          infoUrl: 'https://otakukart.com/wp-content/uploads/2021/10/Midnight.jpg',
          theloai: 'Thriller',
          ngaychieu: '2022-04-15',
          thoiluong: 104,
          ngonngu: 'Tiếng Việt',
          daodien: 'Oh-Seung Kwon',
          dienvien: 'Wi Ha Joon, Ki-joo Jin, Eun-Woo Bae',
          content:
            'Một phụ nữ trẻ bị điếc và mẹ của cô chiến đấu với một kẻ giết người hàng loạt sau khi họ vô tình làm gián đoạn một vụ giết người của hắn. Một trò chơi mèo vờn chuột chết chóc diễn ra khắp thành phố khi những người phụ nữ cố gắng đi trước kẻ săn đuổi họ.',
        },
        {
          hide: true,
          id: 5,
          title: 'PEE NAK 3',
          posterUrl: require('./image/film/peenak.jpg'),
          date: [
            { id: 0, time: '21', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Long Khánh'] },
            { id: 1, time: '22', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Discovery'] },
            { id: 2, time: '23', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
            { id: 3, time: '24', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
          ],
          infoUrl: 'https://i.ytimg.com/vi/DBuOUvsATzc/maxresdefault.jpg',
          theloai: 'Horror',
          ngaychieu: '2022-04-15',
          thoiluong: 110,
          ngonngu: 'Tiếng Việt',
          daodien: 'Duy Idol',
          dienvien: 'Phiravich Attachitsataporn, Khunnapat Pichetworawut, Puwadon Vejovongsa',
          content:
            'Sau khi khai quật được ngôi mộ cổ, Aod mắc phải lười nguyền khiến toàn thân anh mọc vảy như rắn. Aod cùng nhóm bạn phải lên đường tìm cách hóa giải lời nguyền và thoát khỏi sự truy đuổi của Nak Nam, 1 hồn ma và cũng là nạn nhân đầu tiên của lời nguyền',
        },
        {
          hide: true,
          id: 6,
          title: 'THE ADVENT CALENDAR',
          posterUrl: require('./image/film/hide.jpg'),
          date: [
            { id: 0, time: '21', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Long Khánh'] },
            { id: 1, time: '22', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Discovery'] },
            { id: 2, time: '23', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
            { id: 3, time: '24', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
          ],
          infoUrl: 'https://cdn.pastemagazine.com/www/articles/2021/12/01/the-advent-calendar-header.jpeg',
          theloai: 'Horror',
          ngaychieu: '2022-04-13',
          thoiluong: 102,
          ngonngu: 'Tiếng Việt',
          daodien: 'Patrick Ridremont',
          dienvien: 'Eugénie Derouand, Honorine Magnier, Janis Abrikh',
          content:
            'Eva là một người bị liệt. Vào ngày sinh nhật, Sophie, người bạn của cô, tặng cô một cuốn lịch Mùa vọng kỳ lạ. Đó không phải là những món quà truyền thống mà bạn tìm thấy khi mở từng ngăn kéo, mà là những món quà kỳ quặc đáng sợ và trở nên đẫm máu hơn.',
        },
        {
          hide: true,
          id: 7,
          title: 'RUN HIDE FIGHT',
          posterUrl: require('./image/film/run.jpg'),
          date: [
            { id: 0, time: '21', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Long Khánh'] },
            { id: 1, time: '22', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Discovery'] },
            { id: 2, time: '23', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
            { id: 3, time: '24', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', 'Huế'] },
          ],
          infoUrl: 'https://ghienreview.com/wp-content/uploads/2021/02/Ghien-review-Run-Hide-Fight-01.jpg',
          theloai: 'Action',
          ngaychieu: '2022-04-22',
          thoiluong: 110,
          ngonngu: 'Tiếng Việt',
          daodien: 'Kyle Rankin',
          dienvien: 'Isabel May, Thomas Jane, Olly Sholotan',
          content:
            'Cô gái 17 tuổi Zoe Hull sử dụng trí thông minh, kỹ năng sinh tồn và lòng trắc ẩn của mình để chiến đấu vì mạng sống của mình và của những người bạn cùng lớp, chống chọi trực tiếp lại một nhóm bắn súng tại trường.',
        },
      ],

      place: [
        { id: 0, city: 'TPHCM', rap: ['Lê Văn Việt', 'Quang Trung', 'Thảo Điền', '3.2', 'Phạm Hùng'] },
        { id: 1, city: 'Đồng Nai', rap: ['Long Khánh'] },
        { id: 2, city: 'Huế', rap: ['Huế'] },
        { id: 3, city: 'Hà Nội', rap: ['Discovery', 'The Garden', 'Phạm Ngọc Thạch'] },
      ],
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ marginTop: 0 }}>
        <TouchableOpacity
          onPress={() => {
            console.log(item)
            this.props.navigation.navigate('Infomation', {
              item: item,
              id: this.state.id,
              entries: this.state.entries,
              place: this.state.place,
            })
          }}
        >
          <ImageBackground
            source={item.posterUrl}
            style={{
              width: 180,
              height: Dimensions.get('window').height * 0.36,
              resizeMode: 'cover',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{ borderRadius: 6 }}
          />
          {this.state.activeSlide === item.id && <Title title={item.title} time={item.thoiluong} />}
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const sliderWidth = Dimensions.get('window').width
    const itemHeight = Dimensions.get('window').height
    console.log('id' + this.state.id)

    return (
      <View style={{ backgroundColor: '#020200', alignItems: 'center', paddingTop: 10 }}>
        <Carousel
          ref={(c) => {
            this._carousel = c
          }}
          // onPress={() => {
          //   this._carousel.snapToPrev((animated = true), (fireCallback = true))
          // }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={200}
          itemWidth={180}
          itemHeight={Dimensions.get('window').height * 0.36}
          onLayout={(index) => this.setState({ activeSlide: this.state.id })}
          onSnapToItem={(index) => this.setState({ activeSlide: index, id: index })}
          firstItem={3}
          activeSlideOffset={10}
        ></Carousel>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Booking', {
              id: this.state.id,
              entries: this.state.entries,
              place: this.state.place,
            })
          }
          style={{
            backgroundColor: '#5aac00',
            width: 260,
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
          }}
        >
          <Ionicons name="receipt-outline" size={15} style={{ marginRight: 5, color: '#f2ffdf' }}></Ionicons>
          <Text style={{ color: '#f2ffdf', fontSize: 16, fontWeight: 'bold' }}>Booking</Text>
        </TouchableOpacity>
        <View style={{ padding: 1000, backgroundColor: '#020200' }}></View>
      </View>
    )
  }
}
