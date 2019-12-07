// import React from "react";
// import { View, Text, StyleSheet, Button, Image } from "react-native";
// // import Fire from "../Fire";

// export default class ProfileScreen extends React.Component {
//     state = {
//         user: {}
//     };

//     // unsubscribe = null;

//     // componentDidMount() {
//     //     const user = this.props.uid || Fire.shared.uid;

//     //     this.unsubscribe = Fire.shared.firestore
//     //         .collection("users")
//     //         .doc(user)
//     //         .onSnapshot(doc => {
//     //             this.setState({ user: doc.data() });
//     //         });
//     // }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={{ marginTop: 64, alignItems: "center" }}>
//                     <View style={styles.avatarContainer}>
//                         <Image
//                             source={
//                                 this.state.user.avatar
//                                     ? { uri: this.state.user.avatar }
//                                     : require("../assets/tempAvatar.jpg")
//                             }
//                             style={styles.avatar}
//                         />
//                     </View>
//                     <Text style={styles.name}>{this.state.user.name}</Text>
//                 </View>
//                 <View style={styles.statsContainer}>
//                     <View style={styles.stat}>
//                         <Text style={styles.statAmount}>21</Text>
//                         <Text style={styles.statTitle}>Posts</Text>
//                     </View>
//                     <View style={styles.stat}>
//                         <Text style={styles.statAmount}>981</Text>
//                         <Text style={styles.statTitle}>Followers</Text>
//                     </View>
//                     <View style={styles.stat}>
//                         <Text style={styles.statAmount}>63</Text>
//                         <Text style={styles.statTitle}>Following</Text>
//                     </View>
//                 </View>

//                 <Button
//                     onPress={() => {
//                         Fire.shared.signOut();
//                     }}
//                     title="Log out"
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     profile: {
//         marginTop: 64,
//         alignItems: "center"
//     },
//     avatarContainer: {
//         shadowColor: "#151734",
//         shadowRadius: 30,
//         shadowOpacity: 0.4
//     },
//     avatar: {
//         width: 136,
//         height: 136,
//         borderRadius: 68
//     },
//     name: {
//         marginTop: 24,
//         fontSize: 16,
//         fontWeight: "600"
//     },
//     statsContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         margin: 32
//     },
//     stat: {
//         alignItems: "center",
//         flex: 1
//     },
//     statAmount: {
//         color: "#4F566D",
//         fontSize: 18,
//         fontWeight: "300"
//     },
//     statTitle: {
//         color: "#C3C5CD",
//         fontSize: 12,
//         fontWeight: "500",
//         marginTop: 4
//     }
// });





import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={require("../assets/maha.jpg")} />
                <Text style={styles.profileName}>Mahamed Ahmed Hashi</Text>
                </View>
                <Text style={styles.profileEmail}>hashi@gmail.com</Text>
                <View style={styles.UserNumberContainer}>
                <Image style={styles.UserFlagImage} source={require("../assets/canada.png")} />
                <Text style={styles.UserNumber}>+1 6466476476</Text>
                </View>
                 <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.text}>To comly with anti-money-laundering law, your 
                        name must match the name on your debit card</Text>
                    </View>
                    <View style={styles.EditbuttonContainer}>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                    </View>
                        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    },
    profileContainer: {
        alignContent: "center",
        justifyContent: "center", 
    },
    profileImage: {
        width: 200,
        height: 200,
        marginLeft: '25%',
        borderRadius: 100,
        top: 60,
    },
    profileName: {
        fontSize: 26,
        fontWeight: "600",
        alignContent: 'center',
        justifyContent: 'center',
        top: 60,
        marginLeft: '18%',
    },
    UserNumberContainer: {
        flexDirection: "row",
        marginLeft: '18%',
        // alignContent: 'center',
        // justifyContent: 'center',
        top: 72,
    },
    UserFlagImage: {
        width: 50,
        height: 50,
    },
    profileEmail: {
        fontSize: 20,
        fontWeight: "300",
        alignContent: 'center',
        justifyContent: 'center',
        top: 66,
        marginLeft: '18%',
    },
    UserNumber: {
        fontSize: 20,
        fontWeight: "300",
        marginLeft: 25,
        top: 8,
    },
    buttonContainer: {
        backgroundColor: "black",
        width: 350,
        height: 60,
        padding: 20,
        margin: 30,
        borderRadius: 30,
        top: 80,
        position: 'relative'
    },
    EditbuttonContainer: {
        backgroundColor: "black",
        width: 350,
        height: 60,
        padding: 20,
        margin: 30,
        borderRadius: 30,
        top: 0,
        position: 'relative'
    },
    buttonText: {
        color: "#ffff",
        fontWeight: "500",
        paddingLeft: 140,
        fontSize: 20,
        top: 14,   
    },
    button: {
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        justifyContent: "center",
        alignContent: 'center',
        fontSize: 12,
        top: 20,
        padding: 40,

    }

});
