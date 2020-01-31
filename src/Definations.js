import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Button from './Button'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';


class Definations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false
        }
        this.definations = [{ title: "لفظ", meaning: "جو انسان منہ سے بولے اسے لفظ کہتے ہیں۔" },
        { title: "لفظ", meaning: "جو انسان منہ سے بولے اسے لفظ کہتے ہیں۔" },
        { title: "لفظ", meaning: "جو انسان منہ سے بولے اسے لفظ کہتے ہیں۔" },
        { title: "لفظ", meaning: "جو انسان منہ سے بولے اسے لفظ کہتے ہیں۔" },
        { title: "لفظ", meaning: "جو انسان منہ سے بولے اسے لفظ کہتے ہیں۔" },
        { title: "لفظ", meaning: "جو انسان منہ سے بولے اسے لفظ کہتے ہیں۔" }]
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
                    <Text style={{ color: "#fff", fontSize: 26 }}> خلاصۃ النحو </Text>
                </View>
                <FlatList
                    style={{ width: '100%', marginTop: "2%" }}
                    data={this.definations}
                    renderItem={(data, index) => {
                        console.log(data)
                        return (
                            <Defination title = {data.item.title} meaning = {data.item.meaning} 
                            // collapse = {()=>  this.setState({ collapse: !this.state.collapse })} 
                            // showCollapse = {this.state.collapse}
                             />
                        );
                    }}
                />
            </View>
        )
    }
}


export default Definations

class Defination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false
        }
    }
    render() {
        return (
            <View style={{ marginHorizontal: "3%", borderColor: '#5a9fef', borderWidth: 1, borderRadius: 5, marginVertical: 4 }}>
            <TouchableOpacity style={{
                height: 45, width: "100%",
                // alignItems :'center' ,
                justifyContent: "center", paddingRight: 12,

            }} onPress={()=> this.setState({collapse : !this.state.collapse})}>
                <Text style={{ fontSize: 19, textAlign: "right" }}> {this.props.title} </Text>
            </TouchableOpacity>
            {
                this.state.collapse ?
                    <View style={{
                        width: "100%", height: 40, alignItems: "center", justifyContent: "center",
                        borderColor: "#5a9fef", borderWidth: 1
                    }}>
                        <Text style={{
                            flex: 1, paddingRight: 12,
                            fontSize: 16, textAlign: "center"
                        }}>
                            {this.props.meaning}
                        </Text>
                    </View>
                    :
                    null
            }
        </View>
        )
    };
}