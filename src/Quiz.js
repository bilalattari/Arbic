import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Button from './Button'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';


class QuizHome extends Component {
    constructor(props) {
        super(props)

        this.chapters = [
        { name: 'اسم فعل حرف کی پہچان' },
        { name: 'معرفہ نکرہ کی پہچان' },
        { name: 'مذکر مؤنث کی پہچان' },
    ]
    }
    render() {


        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <View style={{
                    justifyContent: "center", alignItems: "center", backgroundColor: "#0E4C94",
                    height: 60, width: "100%", borderBottomColor: "grey", borderBottomWidth: 1
                }}>
                    <Text style={{ color: "#fff", fontSize: 26 }}> العربى لغة القرآن </Text>
                </View>
                <FlatList
                    style={{ width: '100%', marginTop: "2%" }}
                    data={this.chapters}
                    renderItem={(data, index) => {
                        console.log(data)
                        return (
                            <View style={{ marginHorizontal: "3%", borderColor: '#5a9fef', borderWidth: 1, borderRadius: 5, marginVertical: 4 }}>
                                <TouchableOpacity style={{
                                    height: 45, width: "100%",
                                    // alignItems :'center' ,
                                    justifyContent: "center", paddingRight: 12,

                                }}
                                onPress={() => { Actions.Questions() }}
                                >
                                    <Text style={{ fontSize: 19, textAlign: "right" }}> {data.item.name} </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
        )
    }
}


export default QuizHome

