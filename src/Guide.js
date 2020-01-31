import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import {
    AppRegistry,
    StyleSheet, AsyncStorage,
    TouchableOpacity, Text,
    View, Platform, ActivityIndicator, BackHandler, ImageEditor, Image
} from 'react-native';
class Guide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guide1: true,
            guide2: false,
            guide3: false,
        }
    }
    changePage = () => {

        if (this.state.guide2 === false) {
            this.setState({ guide2: true })
        } else if (this.state.guide3 === false) {
            this.setState({ guide3: true })
        }
        else if (this.state.guide1 === true && this.state.guide2 === true && this.state.guide3 === true)
            this.skipGuide()
    }

    skipGuide = () => {
        AsyncStorage.setItem('skipGuide', 'true')
        Actions.SearchCamera()
    }
    render() {
        return (
            <View style={{
                flex: 1, justifyContent: "center", alignItems: "center",
                backgroundColor: "#ff6900"
            }}>
                <View style={{ justifyContent: "flex-start", height: 60, flexDirection: "row" }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}> Quick Guide </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => { this.skipGuide() }}
                        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", }}>
                        <TouchableOpacity style={{
                            height: 25, width: 55, justifyContent: "center", alignItems: "center",
                            borderRadius: 2, backgroundColor: "#cccccc", marginRight: 12
                        }}>
                            <Text style={{ color: "#ff6900", fontSize: 14, fontWeight: "500" }}>
                                Skip
                        </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </View>
                {
                    this.state.guide1 && this.state.guide2 === false && this.state.guide3 === false ?
                        <View style={{ flex: 1, }}>
                            {/* <View style={{ flex: 3, }}> */}
                            <View style={{
                                flex: 1.5, justifyContent: "center", alignItems: "center",
                                backgroundColor: "#ff6900",
                            }}>
                                <Image source={require("./loadcard.png")}
                                    style={{ flex: 1, resizeMode: "contain" }} />
                            </View>
                            {/* </View> */}
                            <View style={{
                                flex: 1, backgroundColor: "#cccccc",
                            }}>
                                <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
                                    <Text style={{
                                        fontSize: 18, color: "#fff", fontWeight: "600",
                                        marginVertical: "3%"
                                    }}> Loading Credit </Text>
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 15, color: "#fff", textAlign: "center", marginHorizontal: "7%", }}>
                                        1.Scratch the metallic strip of your credit voucher
                                        ensuring all numbers are clearly visible.
                                </Text>
                                </View>
                            </View>
                        </View>
                        :
                        this.state.guide2 === true && this.state.guide1 === true && this.state.guide3 === false ?
                            <View style={{ flex: 1, }}>
                                {/* <View style={{ flex: 3, }}> */}
                                <View style={{
                                    flex: 1.5, justifyContent: "center", alignItems: "center",
                                    backgroundColor: "#ff6900",
                                }}>
                                    <Image source={require("./scann.jpg")}
                                        style={{ flex: 1, resizeMode: "contain" }} />
                                </View>
                                {/* </View> */}
                                <View style={{
                                    flex: 1, backgroundColor: "#cccccc",
                                }}>
                                    <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
                                        <Text style={{
                                            fontSize: 18, color: "#fff", fontWeight: "600",
                                            marginVertical: "3%"
                                        }}> Loading Credit </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", textAlign: "center", marginHorizontal: "4%", marginHorizontal: "7%", }}>
                                            2.Point your phone at the serial number on your voucher to load the credit
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            :
                            this.state.guide3 === true && this.state.guide2 === true && this.state.guide1 === true ?
                                <View style={{ flex: 1, }}>
                                    {/* <View style={{ flex: 3, }}> */}
                                    <View style={{
                                        flex: 1.5, justifyContent: "center", alignItems: "center",
                                        backgroundColor: "#ff6900",
                                    }}>
                                        <Image source={require("./subscription.jpg")}
                                            style={{ flex: 1, resizeMode: "contain" }} />
                                    </View>
                                    {/* </View> */}
                                    <View style={{
                                        flex: 1, backgroundColor: "#cccccc",
                                    }}>
                                        <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
                                            <Text style={{
                                                fontSize: 18, color: "#fff", fontWeight: "600",
                                                marginVertical: "3%"
                                            }}> Get Subscription </Text>
                                        </View>
                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 15, color: "#fff", textAlign: "center", marginHorizontal: "4%", marginHorizontal: "7%", }}>
                                                3.Initially you will get 5 tokens and after watching any video you will get 5 more.
                                    </Text>
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                }
                <View style={{ justifyContent: "flex-end", height: 40, flexDirection: "row", backgroundColor: "#cccccc", }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                       
                    </View>
                    <TouchableOpacity
                        onPress={() => { this.changePage() }}
                        style={{
                            height: 25, width: 55, justifyContent: "center", alignItems: "center",
                            borderRadius: 2, backgroundColor: "#cccccc", marginRight: 12
                        }}>
                        <Text style={{ color: "#ff6900", fontSize: 16, fontWeight: "500" }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Guide