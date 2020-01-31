import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Button from './Button'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';


class Home extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
             
                <View style = {{justifyContent : "center" , alignItems : "center" ,backgroundColor : "#0E4C94", 
                height : 60 , width : "100%" , borderBottomColor : "grey" , borderBottomWidth : 1}}>
                   <Text style = {{color : "#fff" , fontSize : 26}}> خلاصۃ النحو </Text> 
                </View>
                <View style = {{flex : 1, justifyContent : "center" , alignItems : "center" , marginTop : -21}}>
                <TouchableOpacity style={{
                    height: 50, width: "70%", marginVertical: 4,
                    // alignItems :'center' ,
                    justifyContent: "center", 
                    borderColor: '#5a9fef', borderWidth: 1, borderRadius: 5
                }}>
                    <Text style={{ fontSize: 25, textAlign: "center" }}> ابتدائی باتیں </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 50, width: "70%", marginVertical: 4,
                    // alignItems :'center' ,
                    justifyContent: "center", 
                    borderColor: '#5a9fef', borderWidth: 1, borderRadius: 5
                }} onPress = {()=> Actions.Definations()}>
                    <Text style={{ fontSize: 25, textAlign: "center" }}> تعریفات </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 50, width: "70%", marginVertical: 4,
                    // alignItems :'center' ,
                    justifyContent: "center", 
                    borderColor: '#5a9fef', borderWidth: 1, borderRadius: 5
                }} onPress = {()=> Actions.QuizHome()}>
                    <Text style={{ fontSize: 25, textAlign: "center" }}> تمارین </Text>
                </TouchableOpacity>
                    </View>
            </View>
        )
    }
}


export default Home