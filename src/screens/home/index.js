
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import Button from './components/button'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#0098e5' }}>




                <View style={{ flex: 1, height: 320 }}>
                    <TouchableHighlight onPress={() => { }} underlayColor="#0088e2" style={{ justifyContent: 'center', alignItems: 'center', flex: 3, borderBottomWidth: 0.2, borderBottomColor: '#ddd' }}>
                        <View>
                            <Text style={{ color: 'white' }}>
                                Dinheiro em Conta
                        </Text>
                            <Text style={{ color: 'white', fontSize: 50 }}>
                                R$ 4
                        </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { }} underlayColor="#0088e2" style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: 'white' }}>
                            Render Meu dinheiro
                                        </Text>
                    </TouchableHighlight>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: "#0088e2" }}>
                        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Adicionar') }} underlayColor="#007be0" style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginRight: 2 }}>
                            <Text style={{ color: 'white' }}>
                                Adicionar
                                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Retirar') }} underlayColor="#007be0" style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: 2 }}>
                            <Text style={{ color: 'white' }}>
                                Retirar
                                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#ededed', height: 120 }} horizontal>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Button icon={<Icon name='chain-broken'         size={25} color='red' />} />
                        <Button icon={<Icon name='pencil-square-o'      size={25} color='green' />} />
                        <Button icon={<Icon name='anchor'               size={25} color='blue' />} />
                        <Button icon={<Icon name='backward'             size={25} color='purple' />} />
                        <Button icon={<Icon name='chevron-right'        size={25} color='orange' />} />
                        <Button icon={<Icon name='crosshairs'           size={25} color='yellow' />} />
                        <Button icon={<Icon name='check-circle-o'       size={25} color='pink' />} />
                        <Button icon={<Icon name='compress'             size={25} color='brown' />} />
                        <Button icon={<Icon name='magnet'               size={25} color='gray' />} />
                        <Button icon={<Icon name='folder-open'          size={25} color='purple' />} />
                    </View>
                </ScrollView>
               
                <View style={{ flex: 1, backgroundColor: 'white', minHeight: 430 }}>


                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#ddd', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 5 }} >
                        <Text >
                            Atividade
                            </Text>
                        <Text style={{ color: '#0098e5' }}>
                            Ver tudo
                            </Text>
                    </View>

                    <TouchableHighlight onPress={() => { }} underlayColor="#ddd" style={{ height: 60, justifyContent: 'center' }}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text>
                                Você Adicionou Dinheiro
                        </Text>
                            <Text>
                                R$ 4
                        </Text>
                        </View>
                    </TouchableHighlight>







                </View>
            </ScrollView>
        );
    }
}

