import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Entypo';
import LIcon from 'react-native-vector-icons/Feather';
import { Drawer, Item as FormItem } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
class ContentView extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }} >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: '#000', fontSize: 32, fontWeight: '700' }}> Drawer </Text>
                </View>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row', height: 40, width: "100%",
                        opacity: 0.6, paddingLeft: 8
                    }}  onPress = {()=> {Actions.Menu()}}>
                        <Icon name='home' size={23} color="#000" style={{
                            // padding: 15
                        }} />
                        <Text style={{ color: '#000' }}>  Home </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{
                        flexDirection: 'row', height: 40, width: "100%",
                        opacity: 0.6, paddingLeft: 8
                    }} onPress = {()=> {Actions.Home()}}>
                        <LIcon name='home' size={23} color="#000" style={{
                        }}  />
                        <Text style={{ color: '#000' }}>  Another screen </Text>
                    </TouchableOpacity >

                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row', height: 40, width: "100%",
                        opacity: 0.6, paddingLeft: 8
                    }} onPress = {()=> {
                        firebase.auth().signOut()
                        Actions.Signin()
                    }}>
                        <LIcon name='log-out' size={23} color="#000" style={{
                            // padding: 15
                        }}  />
                        <Text style={{ color: '#000' }}>  Log Out </Text>
                    </TouchableOpacity >
                </View>
            </View>
        );
    }
}


class Menu extends Component {
    openDrawer = () => {
        this.drawer._root.open()
    };
    closeDrawer = () => {
        this.drawer._root.close()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<ContentView />}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.3}
                panCloseMask={0.3}
            >
                <View style={{ height: 60, width: '100%' }}>
                    <Icon name='menu' size={30} color="#000" style={{
                        padding: 15
                    }} onPress={this.openDrawer.bind(this)} />
                </View>
                <View style={{
                    flex: 1, justifyContent: "center", alignItems: "center",
                }}>
                    <Text>
                        Menuuuu
                </Text>
                </View>
            </Drawer>

        )
    }
}

export default Menu