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

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Save Changes</Text>
            </TouchableOpacity>

                <View>
                    <Text style={styles.text}>To comly with anti-money-laundering law, your 
                    name must match the name on your debit card</Text>
                </View>

                <TouchableOpacity style={styles.button1} onPress={this.handleLogin}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Edit Profile</Text>
            </TouchableOpacity>
                </View>
    );
}
}
const styles = StyleSheet.create({
container: {
    flex: 1,
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
    marginHorizontal: 30,
},
UserNumberContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
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
    marginHorizontal: 30,
},
UserNumber: {
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 25,
    top: 8,
},
buttonText: {
    color: "#ffff",
    fontWeight: "500",
    paddingLeft: 140,
    fontSize: 20,
    top: 14,   
},
text: {
    justifyContent: "center",
    alignContent: 'center',
    fontSize: 12,
    top: 60,
    padding: 40,
},
button: {
    marginHorizontal: 30,
    backgroundColor: "#0D77CE",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    top: 90
},
button1: {
    marginHorizontal: 30,
    backgroundColor: "#0D77CE",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    top: 60
},
});
