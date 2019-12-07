
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class SendMoneyScreen extends React.Component {
    state = {
        text: ''
      };
    
    render() {
        return (
<ScrollView>

<View style={styles.visaContainer}>
        <Image style={styles.visaImage} source={require("../assets/visa.png")} />
        <View style={styles.cardContainer}>
        <Text style={styles.cardNumber}>4500 0899 8600 0898</Text>
    <Text style={styles.cardName}>Mahamed Hashi</Text>
    <Text style={styles.cardExpireDate}>01 / 02</Text>
  </View>
  </View>
  <Text style={styles.to}>To</Text>
  <View style={styles.moneyToConatiner}>
  <Text style={styles.toName}>Raaj Bahook</Text>
  <Image style={styles.visaImage} source={require("../assets/india.png")} />
  </View>
  <View>
  <TextInput  
        style={styles.textinputAmount}  
        placeholder="$ Amount"  
        ></TextInput>
  </View>
  <View style={styles.AmountContainer}>
      <View style={styles.AmountInerContainer}>
          <Text style={styles.Amount}>$100</Text>
      </View>
      <View style={styles.AmountInerContainerSecond}>
          <Text style={styles.Amount}>$200</Text>
      </View>
      <View style={styles.AmountInerContainer}>
          <Text style={styles.Amount}>$300</Text>
      </View>
  </View>
      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>SEND</Text>
                </TouchableOpacity>
</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    visaContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: "#693EDD",
        borderRadius: 25,
        paddingLeft: 10,
        margin: 10,
        // shadowOpacity: 3,
        width: 390,
        height: 260,
        top: 40,
      },
      visaImage: {
        width: 80,
        height: 80,
        borderRadius: 6,
        top: 5,
        left: 60
      },
      cardNumber: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
    },
    cardName: {
        color: "white",
        fontSize: 24,
        fontWeight: "300",
        top: 4,
    },
    cardExpireDate: {
        color: "white",
        fontSize: 24,
        fontWeight: "200",
        top: 6,
    },
    moneyToConatiner: {
        flexDirection: "row",
        padding: 10,
        top: 10,
    },
    to: {
        fontSize: 28,
        fontWeight: "600",
        top: 35,
        paddingLeft: 12,
    },
    toName: {
        fontSize: 28,
        fontWeight: "600",
        top: 30,
        paddingLeft: 4  
    },
    textinputAmount: {
        fontSize: 20,
        borderBottomColor: '#E0DEDE',
        borderBottomWidth: 1,
        borderColor: 'gray',
        margin: 20,
    },
    AmountContainer: {
        flexDirection: "row",
        margin: 1,
    },
    AmountInerContainer: {
        borderRadius: 40,
        width: 80,
        height: 50,
        top: 0,
        margin: 24,
        borderWidth: 1,
        shadowOpacity: 0.4,
    },
    AmountInerContainerSecond: {
        backgroundColor: "lightgrey",
        borderRadius: 40,
        width: 80,
        height: 50,
        top: 0,
        margin: 24,
    },
    Amount: {
        fontWeight:"100",
        fontSize: 18,
        top: 16,
        paddingLeft: 16
    }, 
    buttonText: {
        color: "#ffff",
        fontWeight: "500",
        paddingLeft: 140,
        fontSize: 22,
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#0D77CE",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        top: 10,
    },
});
