
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class SendMoneyScreen extends React.Component {
state = {
    text: ''
    };

render() {
    return (
<ScrollView style={styles.scrollContainer}>

<View style={styles.visaContainer}>
    <Image style={styles.visaImage} source={require("../assets/visa.png")} />
    <View style={styles.cardContainer}>
    <View style={styles.nameDataContainer}>
<Text style={styles.cardName}>Mahamed Hashi</Text>
<Text style={styles.cardExpireDate}>01 / 08</Text>
</View>
    <Text style={styles.cardNumber}>4500 0899 8600 0898</Text>
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
scrollContainer: {
    bottom: 20,
},
visaContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: "#693EDD",
    borderRadius: 25,
    paddingLeft: 10,
    margin: 10,
    width: 340,
    height: 260,
    top: 60,
    },
    visaImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    top: 8,
    left: 30
    },
    cardNumber: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    top: 20,
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
    paddingLeft: 40
},
moneyToConatiner: {
    flexDirection: "row",
    padding: 10,
    top: 10,
},
to: {
    fontSize: 28,
    fontWeight: "600",
    top: 50,
    paddingLeft: 12,
},
toName: {
    fontSize: 28,
    fontWeight: "600",
    top: 40,
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
    top: 10
},
nameDataContainer: {
    flexDirection: "row",
  },
});
