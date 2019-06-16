import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Menu extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingLeft: 20, backgroundColor: '#0098e5', height: 100 }}>
                    <Icon name='user-circle' size={40} color='white' />
                    <Text style={{ color: 'white', marginLeft: 20 }}>TONY STARK</Text>
                </View>
                <TouchableHighlight onPress={() => { }} underlayColor="#ddd" style={{ height: 60, justifyContent: 'center' }} >
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='user-circle' size={20} color='green' />
                        <Text style={{ marginLeft: 50 }}>Inicio</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }} underlayColor="#ddd" style={{ height: 60, justifyContent: 'center' }} >
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='user-circle' size={20} color='green' />
                        <Text style={{ marginLeft: 50 }}>Pagamentos</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }} underlayColor="#ddd" style={{ height: 60, justifyContent: 'center' }} >
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='user-circle' size={20} color='green' />
                        <Text style={{ marginLeft: 50 }}>Depositos</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }} underlayColor="#ddd" style={{ height: 60, justifyContent: 'center' }} >
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='user-circle' size={20} color='green' />
                        <Text style={{ marginLeft: 50 }}>QR Code</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

