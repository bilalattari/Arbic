
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
class Button extends Component {
    render() {
        return (
            <View style={styles.inputDiv}>

                <TouchableOpacity
                    style={styles.signUpBtn}
                    onPress={this.props.onBtnPress}   >
                    <Text style={styles.signUpBtnTxt}
                    >{this.props.btnText} </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    inputDiv: {
        margin: 3,
        marginRight: 12,
        marginLeft: 12,
        // paddingHorizontal: 8,
    },
    signUpBtn: {
        // marginRight: 21,
        // marginLeft:21,
        // marginTop: 10,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#BFDAF9',
        elevation: 3
    },
    signUpBtnTxt: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold'
    }
})
export default Button