import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Personal extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, backgroundColor:"#020200" }}>
        <View style={{ height: 50 }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: "absolute", top: 15, left: 15 }}>
            <Feather style={{ color: '#d9d9d9' }} name='x' size={30}></Feather>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{color:"white", fontSize:28, fontWeight:"400", marginLeft:10}}>Account Infomation</Text>
          <View style={{ position: "relative" }}>
            <Image style={{ width: "100%", height: 200 }} source={{ uri: 'https://i.ytimg.com/vi/HO2MOiB2jtc/maxresdefault.jpg' }}></Image>
            <View style={{ position: "absolute", bottom: 15, left: 20 }}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>Phạm Duy</Text>
              <Text style={{ color: "white",fontSize:13 }}>Reward-Points: 0</Text>
              <Text style={{ color: "white",fontSize:13  }}>Email: duymesut1@gmail.com</Text>
            </View>
          </View>
          <Text style={{textAlign:"center", marginBottom:30, marginTop:20, fontSize:15, color:"#c0c0c0"}}>Click to record points</Text>
        </View>

        <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
          <View style={{borderTopColor: "#575755", borderTopWidth: 1, height:50, justifyContent:"center" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal:25}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons style={{ color: "#5b5b5b", paddingRight: 10 }} name='card-account-details-outline' size={20}></MaterialCommunityIcons>
                <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Details</Text>
              </View>
              <MaterialIcons style={{ color: "#c0c0c0" }} size={25} name='keyboard-arrow-right'></MaterialIcons>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("Edit")}>
          <View style={{borderTopColor: "#575755", borderTopWidth: 1, height:50, justifyContent:"center" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal:25}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='user-o' size={20}></FontAwesome>
                <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Edit/ Update</Text>
              </View>
              <MaterialIcons style={{ color: "#c0c0c0" }} size={25} name='keyboard-arrow-right'></MaterialIcons>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{borderTopColor: "#575755", borderTopWidth: 1, height:50, justifyContent:"center" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal:25}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome style={{ color: "#5b5b5b", paddingRight: 10 }} name='lock' size={20}></FontAwesome>
                <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Change Password</Text>
              </View>
              <MaterialIcons style={{ color: "#c0c0c0" }} size={25} name='keyboard-arrow-right'></MaterialIcons>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("PaymentHistory")}>
          <View style={{borderTopColor: "#575755", borderTopWidth: 1, height:50, justifyContent:"center" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal:25}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign style={{ color: "#5b5b5b", paddingRight: 10 }} name='reload1' size={20}></AntDesign>
                <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Payment History</Text>
              </View>
              <MaterialIcons style={{ color: "#c0c0c0" }} size={25} name='keyboard-arrow-right'></MaterialIcons>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{borderTopColor: "#575755", borderTopWidth: 1, height:50, justifyContent:"center" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal:25}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons style={{ color: "#5b5b5b", paddingRight: 10 }} name='logout' size={20}></MaterialIcons>
                <Text style={{ color: '#c0c0c0', fontSize: 15 }}>Log Out</Text>
              </View>
              <MaterialIcons style={{ color: "#c0c0c0" }} size={25} name='keyboard-arrow-right'></MaterialIcons>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}