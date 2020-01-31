import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';


class Splashscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        }
    }
    moveToScreen = () =>{
        Actions.Home()
    }
    componentDidMount(){
        setTimeout(moveToScreen , 2000)
    }
    render() {
        return (
            <View style={{
                flex: 1, justifyContent: "center", backgroundColor: "#94ecf9"
            }}>
                <View>
                    <Text style={{ textAlign: "center", fontSize: 25 }}>خلاصة النحو  </Text>
                </View>
                {
                    this.state.loader === true ?
                        <ActivityIndicator size="large" color="#0000ff" /> :
                        null
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({

})
export default Splashscreen