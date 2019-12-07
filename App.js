import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SendMoneyScreen from "./screens/SendMoneyScreen";

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOGyz9-QBjAeMH2bgBWjkQMn2oeckcp30",
    authDomain: "fir-app-8b965.firebaseapp.com",
    databaseURL: "https://fir-app-8b965.firebaseio.com",
    projectId: "fir-app-8b965",
    storageBucket: "fir-app-8b965.appspot.com",
    messagingSenderId: "731210400281",
    appId: "1:731210400281:web:b0fc4da018b39d47b7a088"
};

firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
            }
        },
        SendMoney: {
            screen: SendMoneyScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-card" size={24} color={tintColor} />
            }
        },
        Notification: {
            screen: NotificationScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B8BBC4",
            showLabel: false
        }
    }
);

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppTabNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);