// // import { createAppContainer, createSwitchNavigator } from "react-navigation";
// // import { createBottomTabNavigator } from "react-navigation-tabs";
// // import { Ionicons } from "@expo/vector-icons";
// // import { createStackNavigator } from "react-navigation-stack";


// // import LoadingScreen from "./screens/LoadingScreen";
// // import LoginScreen from "./screens/LoginScreen";
// // import RegisterScreen from "./screens/RegisterScreen";
// // import HomeScreen from "./screens/HomeScreen";


// // import MessageScreen from "./screens/MessageScreen";
// // import PostScreen from "./screens/PostScreen";
// // import NotificationScreen from "./screens/NotificationScreen";
// // import ProfileScreen from "./screens/ProfileScreen";


// import React from "react";

// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import LoadingScreen from "./screens/LoadingScreen";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";

// import HomeScreen from "./screens/HomeScreen";
// import MessageScreen from "./screens/MessageScreen";
// // import PostScreen from "./screens/PostScreen";
// import NotificationScreen from "./screens/NotificationScreen";
// import ProfileScreen from "./screens/ProfileScreen";


// import * as firebase from 'firebase';

// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDOGyz9-QBjAeMH2bgBWjkQMn2oeckcp30",
//     authDomain: "fir-app-8b965.firebaseapp.com",
//     databaseURL: "https://fir-app-8b965.firebaseio.com",
//     projectId: "fir-app-8b965",
//     storageBucket: "fir-app-8b965.appspot.com",
//     messagingSenderId: "731210400281",
//     appId: "1:731210400281:web:b0fc4da018b39d47b7a088"
// };

// firebase.initializeApp(firebaseConfig);


// // const AppStack = createStackNavigator({
// //     Home: HomeScreen,
// // });

// // const AuthStack = createStackNavigator({
// //     Login: LoginScreen,
// //     Register: RegisterScreen
// // });

// // export default createAppContainer(
// //     createSwitchNavigator(
// //         {
// //             Loading: LoadingScreen,
// //             App: AppStack,
// //             Auth: AuthStack
// //         },
// //         {
// //             initialRouteName: "Loading"
// //         }
// //     )
// // );
// const AppContainer = createStackNavigator(
//     {
//         default: createBottomTabNavigator(
//             {
//                 Home: {
//                     screen: HomeScreen,
//                     navigationOptions: {
//                         tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />,

//                     }
//                 },
//                 Message: {
//                     screen: MessageScreen,
//                     navigationOptions: {
//                         tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
//                     }
//                 },
                
//                 Notification: {
//                     screen: NotificationScreen,
//                     navigationOptions: {
//                         tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
//                     }
//                 },
//                 Profile: {
//                     screen: ProfileScreen,
//                     navigationOptions: {
//                         tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
//                     }
//                 }
//             },
//             {
//                 defaultNavigationOptions: {
//                     tabBarOnPress: ({ navigation, defaultHandler }) => {
//                         if (navigation.state.key === "Post") {
//                             navigation.navigate("postModal");
//                         } else {
//                             defaultHandler();
//                         }
//                     }
//                 },
//                 tabBarOptions: {
//                     activeTintColor: "#161F3D",
//                     inactiveTintColor: "#B8BBC4",
//                     showLabel: false
//                 }
//             }
//         ),
//     },

// );

// const AuthStack = createStackNavigator({
//     Login: LoginScreen,
//     Register: RegisterScreen
// });

// export default createAppContainer(
//     createSwitchNavigator(
//         {
//             Loading: LoadingScreen,
//             App: AppContainer,
//             Auth: AuthStack
//         },
//         {
//             initialRouteName: "Loading"
//         }
//     )
// );



import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MessageScreen from "./screens/MessageScreen";

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
        Message: {
            screen: MessageScreen,
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