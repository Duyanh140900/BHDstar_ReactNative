import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, View, Text } from 'react-native'
import Theater from '../Components/ShowTimes/Theater';

const Tab = createMaterialTopTabNavigator();

export default class TheaterTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HCM: [
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                }
            ],

            LongKhanh: [
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-243x330.jpg',
                    name: 'LONG KHÁNH',
                    place: '430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                }
            ],
            Hue: [
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy-243x330.jpg',
                    name: 'HUẾ',
                    place: 'Tầng 5, Vincom Plaza Huế, 50A Hùng Vương tổ 10, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                }
            ],
            Hanoi: [
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy-243x330.jpg',
                    name: 'DISCOVERY',
                    place: 'Tầng 8, TTTM Discovery – 302 Cầu Giấy, P.Dịch Vọng, Quận Cầu Giấy, Hà Nội',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy-243x330.jpg',
                    name: 'DISCOVERY',
                    place: 'Tầng 8, TTTM Discovery – 302 Cầu Giấy, P.Dịch Vọng, Quận Cầu Giấy, Hà Nội',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy-243x330.jpg',
                    name: 'DISCOVERY',
                    place: 'Tầng 8, TTTM Discovery – 302 Cầu Giấy, P.Dịch Vọng, Quận Cầu Giấy, Hà Nội',

                },
                {
                    image: 'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg',
                    name: 'Lê Văn Việt',
                    place: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',

                }
            ],

        }
    }

    render() {
        return (
            <Tab.Navigator initialRouteName={"HOME"}
                screenOptions={{
                    headerShown: false,
                    tabBarScrollEnabled: true, 
                    tabBarIndicatorStyle: {
                        backgroundColor: "blue",
                        height: 0,
                    },
                    tabBarStyle: {
                        backgroundColor: '#020200',
                        height: 80, 
                        justifyContent:"space-between"
                    },
                    tabBarShowLabel:false,

                    tabBarItemStyle: {
                        width: 125,
                        height: 60,
                        justifyContent:"center"
                    },
                    tabBarContentContainerStyle:{
                       padding:0,
                       margin:0
                    },
                    tabBarIconStyle:{
                        width:110
                    }
                }}

            >
                <Tab.Screen
                    name={"HOME"}
                    children={() => <Theater item={this.state.HCM} />}
                    options={{
                        tabBarIcon: (focused) => {
                            return (
                                (focused.focused ==true) ?
                                    <View style={{  borderColor: "white", alignItems: "center", height: 40, justifyContent: "center",  backgroundColor: "#5aac02", borderRadius: 6 }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>TPHCM</Text>
                                    </View> :
                                    <View style={{  borderColor: "#aeafad", borderWidth: 1, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 6, backgroundColor: "#0e0e0e" }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>TPHCM</Text>
                                    </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name={"SHOWTIMES"}
                    children={() => <Theater item={this.state.LongKhanh} />}
                    options={{
                        tabBarIcon: (focused) => {
                            return (
                                (focused.focused ==true) ?
                                    <View style={{ borderColor: "white", alignItems: "center", height: 40, justifyContent: "center",  backgroundColor: "#5aac02", borderRadius: 6 }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>Đồng Nai</Text>
                                    </View> :
                                    <View style={{  borderColor: "#aeafad", borderWidth: 1, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 6, backgroundColor: "#0e0e0e" }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>Đồng Nai</Text>
                                    </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name={"STORE"}
                    children={() => <Theater item={this.state.Hue} />}
                    options={{
                        tabBarIcon: (focused) => {
                            return (
                                (focused.focused ==true) ?
                                    <View style={{  borderColor: "white", alignItems: "center", height: 40, justifyContent: "center",  backgroundColor: "#5aac02", borderRadius: 6 }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>Huế</Text>
                                    </View> :
                                    <View style={{  borderColor: "#aeafad", borderWidth: 1, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 6, backgroundColor: "#0e0e0e" }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>Huế</Text>
                                    </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name={"PERSONAL"}
                    children={() => <Theater item={this.state.Hanoi} />}
                    options={{
                        tabBarIcon: (focused) => {
                            return (
                                (focused.focused ==true) ?
                                    <View style={{  borderColor: "white", alignItems: "center", height: 40, justifyContent: "center",  backgroundColor: "#5aac02", borderRadius: 6 }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>Hà Nội</Text>
                                    </View> :
                                    <View style={{  borderColor: "#aeafad", borderWidth: 1, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 6, backgroundColor: "#0e0e0e" }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>Hà Nội</Text>
                                    </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        );
    }

}
