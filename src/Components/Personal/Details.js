import { Text, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { log } from 'react-native-reanimated';

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            details:[
                {id:1, time:'31/10/2020 11:23 PM', site:'BHD Star Discovery', itemName:'Student VIP 2D', quantity:1, spent:45000, movie: 'Titanic', reconition:''},
                {id:2, time:'24/1/2021 11:23 PM', site:'BHD Star Discovery', itemName:'Student VIP 2D', quantity:1, spent:45000, movie: 'Titanic', reconition:''},
                {id:3, time:'24/4/2021 11:23 PM', site:'BHD Star Discovery', itemName:'Student VIP 2D', quantity:1, spent:45000, movie: 'Titanic', reconition:''},
                {id:4, time:'31/1/2022 11:23 PM', site:'BHD Star Discovery', itemName:'Student VIP 2D', quantity:1, spent:45000, movie: 'Titanic', reconition:''},
            ]
        }
    }
    render() {
        const {details} = this.state
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ marginRight: 20 }}>
                        <Feather style={{ color: '#e2e2e0' }} name='arrow-left' size={23}></Feather>
                    </TouchableOpacity>
                    <Text style={{ color: '#e2e2e0', fontSize: 16 }}>Details</Text>
                </View>
                <Text style={[styles.title,{marginVertical:30, marginTop:30, textAlign:"left"}]}>Lịch sử giao dịch:</Text>

                <ScrollView horizontal={true} style={{borderTopColor:"white", borderTopWidth:1}}>
                    <View style={styles.component}>
                        <Text style={styles.title}>Transaction Time</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.time}</Text>
                            </View>)
                            
                        })}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.title}>Site</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.site}</Text>
                            </View>)
                            
                        })}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.title}>Item Name</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.itemName}</Text>
                            </View>)
                            
                        })}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.title}>Quantity</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.quantity}</Text>
                            </View>)
                            
                        })}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.title}>Spent</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.spent}</Text>
                            </View>)
                            
                        })}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.title}>Movie</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.movie}</Text>
                            </View>)
                            
                        })}
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.title}>Recognition</Text>
                        {details.map((item) =>{ return(
                            <View>
                            <Text style={styles.info}>{item.reconition}</Text>
                            </View>)
                            
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#020200',
        height:"100%"
    }, 
    title:{
        color:"white",
        fontSize:16,
        fontWeight:"500",
        marginTop:10,
        textAlign:"center"
    },
    component:{
        marginHorizontal:30,
    },
    info:{
        color:"white",
        fontSize:15
    }

})