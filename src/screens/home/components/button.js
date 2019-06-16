import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => { }} underlayColor="#ddd" style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 2, height: 100, width: 100, marginHorizontal: 10, borderRadius: 5 }}>
                <Text> {this.props.icon} </Text>
            </TouchableHighlight>
        );
    }
}

