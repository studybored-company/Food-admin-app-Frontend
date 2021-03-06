import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Image } from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

const deliveryTips = ({ navigation }) => {

    return (
        <View style={{ paddingBottom:200 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View >
                    <View style={{ flexDirection: "row" }}>
                        <Icons name="arrow-back" onPress={()=>navigation.navigate("deliveryBoy")} color="#FDC913" size={35} style={{ marginLeft: 10, marginTop:10 }}></Icons>
                        <Text style={styles.Tips1}>
                            Delivery Tip
                        </Text>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.Tips2}>Delivery Tip</Text>
                        <TextInput style={styles.input} keyboardType='default'></TextInput>
                        <TouchableOpacity onPress={() => navigation.navigate("deliveryBoy")}>
                            <Text style={{
                                backgroundColor: "#FDC913", color: "white", height: 38, paddingTop: 10, paddingLeft: 42, marginLeft: 110,
                                borderRadius: 20, width: "35%", paddingRight: 40, fontFamily: 'OpenSansBold',
                                 marginTop: 25
                            }}>Add</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

export default deliveryTips;


const styles = StyleSheet.create({
    Tips1: {
        marginLeft: 75,
        marginTop: 10,
        color: "#696969",
        fontFamily: "OpenSansBold",
        fontSize: 30
    },
    back: {
        fontSize: 15,
        marginTop: 50,
        marginLeft: 70,
        color: "#696969",
        fontFamily: "OpenSansRegular"

    },
    Tips2: {
        color: "#696969",
        fontSize: 20,
        fontFamily: "OpenSansSemiBold",
        marginTop: 10,
        marginLeft: 15
    },
    view3: {
        marginBottom: 260,
        paddingLeft: 0,
        paddingTop: 0,
        marginLeft: 18,
        height: 220,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 50
    },
    input: {
        borderColor: "#696969",
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 15,
        width: "90%",
        borderRadius: 2,
        backgroundColor: "white",
        height: "20%",
        fontFamily: "OpenSansRegular",
        color: "#696969"


    },

})