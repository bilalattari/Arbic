
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Item, Input, Item as FormItem } from 'native-base';
import { StyleSheet, View, } from 'react-native';
class Inbox extends Component {
    render() {
        return (
            <View style={styles.inputDiv}>
                <Item style={styles.input}>
                    {
                        this.props.iconName !== undefined || "" ?
                            <Icon name={this.props.iconName} size={20} color="#cccccc" style={{
                                paddingLeft: 8
                            }} />
                            :
                            null
                    }
                    <Input
                        value={this.props.value}
                        onChangeText={this.props.onChange}
                        secureTextEntry={this.props.secure}
                        placeholder={this.props.placeholder}
                        placeholderStyle={{ fontSize: 10 }}
                        placeholderTextColor={this.props.placeholderColor}
                        style={{ marginLeft: "4%", fontSize: 15 }}
                        multiline={this.props.multiLine}
                        numberOfLines={this.props.noLines}
                        keyboardType={this.props.keyboardType}
                    />
                </Item>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStye: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        backgroundColor: '#00758b',
    },

    inputText: {
        fontWeight: 'bold',
        marginBottom: 2,
        marginLeft: 5,
    },
    inputDiv: {
        marginVertical: 3,
        marginRight: 12,
        marginLeft: 12,
        // paddingHorizontal: 8,
    },
    input: {
        height: 42,
        backgroundColor: '#fff',
        // borderColor: '#fce5c8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        // elevation: 4,
    },
})
export default Inbox