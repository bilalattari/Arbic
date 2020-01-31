import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Inbox from './Inbox'
import Button from './Button'
import firebase from 'firebase'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password1: '',
            error: '',
            loader: false
        }
    }
    signInUser = (data) => {
        if (data.email === '' || data.password1 === ''
        ) {
            this.setState({ error: 'All fields are required' })
        }
        else {
            this.setState({ loader: true })
            firebase.auth().signInWithEmailAndPassword(data.email, data.password1).then((data) => {
                // Actions.Menu()
                this.setState({
                    email: '',
                    password1: '',
                    error: '',
                    loader: false
                })
            })
                .catch((err) => {
                    this.setState({ error: err.message, loader: false })
                })
        }
    }
    render() {
        return (
            <View style={{
                flex: 1, justifyContent: "center", backgroundColor: "#94ecf9"
            }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
                        SIGN IN
                    </Text>

                </View>
                <View style={{ marginHorizontal: "5%", marginVertical: '2%' }}>
                    <Inbox placeholder='User Email'
                        onChange={(text) => { this.setState({ email: text }) }}
                        iconName='envelope-o' />
                    <Inbox placeholder='Password'
                        onChange={(text) => { this.setState({ password1: text }) }}
                        iconName='lock' secure={true} />

                </View>
                <View style={{ marginHorizontal: "8%" }}>
                    <Button btnText='Sign In'
                        onBtnPress={() => this.signInUser(this.state)}
                    />

                </View>
                {
                    this.state.loader === true ?
                        <ActivityIndicator size="large" color="#0000ff" /> :
                        null
                }
                {
                    (this.state.error !== '') ? (
                        <Text style={{ color: "red", textAlign: "center" }}> {this.state.error} </Text>
                    ) : null
                }
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <TouchableOpacity
                        onPress={() => Actions.Singup()} >
                        <Text style={{
                            color: 'white', fontWeight: 'bold', marginTop: 10
                        }}>Create an account</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <TouchableOpacity
                        onPress={() => Actions.Singup()} >
                        <Text style={{
                            color: 'white', fontWeight: 'bold', marginTop: 10
                        }}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({

})
export default SignIn