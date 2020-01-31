import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Inbox from './Inbox'
import Button from './Button'
import firebase from 'firebase'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password1: '',
            password2: '',
            error: '',
            loader: false
        }
    }
    signUpUser = (data) => {
        if (data.userName === '' || data.email === '' || data.password1 === ''
            || data.password1 === '') {
            this.setState({ error: 'All fields are required' })
        } else if (data.password1 !== data.password2) { this.setState({ error: 'Password do not match' }) }
        else {
            this.setState({ loader: true })
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password1).then((data) => {
                // Actions.Signin()
                this.setState({
                    userName: '',
                    email: '',
                    password1: '',
                    password2: '',
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
            <ScrollView style={{ flex: 1, backgroundColor: "#94ecf9" }}>
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: "30%" }}>
                        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
                            SIGN UP
                    </Text>

                    </View>
                    <View style={{ marginHorizontal: "5%", marginVertical: "3%" }}>

                        <Inbox placeholder='User Name'
                            onChange={(text) => { this.setState({ userName: text }) }}
                            iconName='user' />
                        <Inbox placeholder='User Email'
                            onChange={(text) => { this.setState({ email: text }) }}
                            iconName='envelope-o' />
                        <Inbox placeholder='Password'
                            onChange={(text) => { this.setState({ password1: text }) }}
                            iconName='lock' secure={true} />
                        <Inbox placeholder='Confirm Password'
                            onChange={(text) => { this.setState({ password2: text }) }}
                            iconName='lock' secure={true} />
                    </View>
                    <View style={{ marginHorizontal: "9%", marginVertical: "3%" }}>
                        <Button btnText='Sign Up'
                            onBtnPress={() =>
                                this.signUpUser(this.state)
                            }
                        />
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

                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <TouchableOpacity
                            onPress={() =>
                                Actions.Signin()
                            }
                        >
                            <Text style={{
                                color: 'white', fontWeight: 'bold', marginTop: 10
                            }}>Already have an account</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

})
export default SignUp