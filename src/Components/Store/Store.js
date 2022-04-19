import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Root, Popup } from 'popup-ui'

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listStore: [
        {
          id:1,
          image: 'https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661327?width=100&height=100&referenceScheme=HeadOffice&allowPlaceHolder=true',
          name: 'Special Combo1 Bap nam XX loc xoay (Sweet)',
          price: 139000.00,
          number:0
        },
        {
          id:2,
          image: 'https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661324?width=100&height=100&referenceScheme=HeadOffice&allowPlaceHolder=true',
          name: 'Special Combo1 Bap nam XX pho mai (Sweet)',
          price: 139000.00,
          number:0
        },
        {
          id:3,
          image: 'https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661336?width=100&height=100&referenceScheme=HeadOffice&allowPlaceHolder=true',
          name: 'Special Combo2 Bap nam XX loc xoay (Sweet)',
          price: 169000.00,
          number:0
        },
        {
          id:4,
          image: 'https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661333?width=100&height=100&referenceScheme=HeadOffice&allowPlaceHolder=true',
          name: 'Special Combo2 Bap nam XX pho mai (Sweet)',
          price: 169000.00,
          number:0
        }
      ],
      total:0
    }
  }
  render() {
    const { listStore, total } = this.state

   let test = () =>{
    
    }

    let minusPrice = (id) =>{
      this.setState(prevState => ({
        listStore: prevState.listStore.map(

          el => (el.id === id && el.number>0) ? { ...el, number: el.number-1, total:prevState.total - el.price }: el
        ),
        
        total:  prevState.total  - listStore[id-1].price
      
      }))
       console.log("minus");
       console.log(listStore[0].number);
    }

    let plusPrice = (id) =>{
      this.setState(prevState => ({
        listStore: prevState.listStore.map(

          el => (el.id === id) ? { ...el, number: el.number+1 }: el
        ),
        total:prevState.total +listStore[id-1].price
      }))
       console.log("plus");
       console.log(total);
    }
    
    const renderItem = ({ item }) => {
      
      return (
        <View style={{ marginBottom: 20, flexDirection: "row", marginLeft: 5, flex: 1, backgroundColor: "#272727", height: 150, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
          <Image style={{ width: 120, height: 100, resizeMode: "contain", marginRight: 20 }} source={{ uri: item.image }}></Image>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", marginBottom: 10, fontSize: 16, fontWeight: "400", marginBottom: 20 }}>{item.name}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {(item.number>0) ? minusPrice(item.id): 0}}>
                  <AntDesign style={{ backgroundColor: "#c2c2c2", borderRadius: 50, color: '#d9d9d9', marginRight: 10 }} name='minuscircleo' size={20}></AntDesign>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 16, marginRight: 10 }}>{item.number}</Text>
                <TouchableOpacity onPress={() => plusPrice(item.id)}>
                  <AntDesign style={{ backgroundColor: "#63af3a", borderRadius: 50, color: '#d9d9d9' }} name='pluscircleo' size={20}></AntDesign>
                </TouchableOpacity>
              </View>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginRight: 20 }}>{item.price}đ</Text>
            </View>
          </View>
        </View>
      );
    };
    return (
      <Root>
      <View style={{ backgroundColor: "#020200", height: '100%' }}>
        <View style={{ marginHorizontal: 10, }}>
          <View>
            <View style={{ height: 50 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: "absolute", top: 15, left: 10 }}>
                <Feather style={{ color: '#d9d9d9' }} name='x' size={30}></Feather>
              </TouchableOpacity>
            </View>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "500", marginLeft: 15 }}>Store</Text>
          </View>

          <View style={{ marginTop: 15, alignItems: "center", marginBottom: 15 }}>
            <View style={{ width: 360, backgroundColor: "#292929", alignItems: "center", height: 35, justifyContent: "center", borderRadius: 6 }}>
              <View style={{ width: 350, backgroundColor: "#4a4a4a", height: 28, borderRadius: 6, justifyContent: "center" }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Concession</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={listStore}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            style={{
              height: '62%',
              flexGrow: 0
            }}
          />

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginBottom: 10 }}>
              <Text style={{ color: "white", fontSize: 17 }}>Subtotal/ Grand Total</Text>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>{total}đ</Text>
            </View>
            <View style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
              <TouchableOpacity onPress={() =>
               (total>0)?this.props.navigation.navigate('Payment'):0
              }
            style={{
                backgroundColor: "#5aac00", width: 360, paddingVertical: 15, flexDirection: "row", justifyContent: "center",
                alignItems: "center", borderRadius: 4,
              }}>
                <Text style={{ color: "#f2ffdf", fontSize: 16, fontWeight: "bold" }}>Finish Payment</Text>
              </TouchableOpacity></View>

          </View>

        </View>
      </View>
      </Root>
    )
  }
}