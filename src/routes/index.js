import React, { Component } from "react"
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation"
import { TouchableOpacity, Text, Image } from 'react-native'

import HomeScreen       from '../screens/home/'
import RetirarScreen    from '../screens/retirar/'
import AdicionarScreen  from '../screens/adicionar/'
import MenuScreen       from '../screens/menu/'

const Stack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions:
                ({ navigation }) => ({
                    headerTransparent: true,
                    headerTintColor: "white",
                    headerLeft: (
                        <TouchableOpacity style={{ marginLeft: 10, width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require('../assets/icon.png')} style={{ width: 15, height: 14 }} />
                        </TouchableOpacity>
                    )
                })
        },
        Retirar: {
            screen: RetirarScreen,
            navigationOptions: {
                headerStyle: { backgroundColor: "#0098e5" },
                headerTintColor: "white",
            }
        },
        Adicionar: {
            screen: AdicionarScreen,
            navigationOptions: {
                headerStyle: { backgroundColor: "#0098e5" },
                headerTintColor: "white",
            }
        }
    },
);
const Drawer = createDrawerNavigator(
    {
        Home: Stack
    },
    {
        drawerWidth: 280,
        contentComponent: MenuScreen,
    }
)
export default AppContainer = createAppContainer(Drawer)