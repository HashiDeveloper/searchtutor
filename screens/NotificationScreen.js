import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class NotificationScreen extends React.Component {
static navigationOptions = {
    header: "cvbkk"
};
render() {
    return (
        <ScrollView>
<View style={styles.container}>
<View style={styles.recentTransfer}>
<Text style={styles.recentTransferTitle}>Recent Transfers </Text>
</View>

<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person.jpg")}></Image> 
    <Text style={styles.transferToName}>Amanda Brad</Text>
<Text style={styles.transferAmount}>-$218.12</Text>
</View>
<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person7.jpg")}></Image> 
    <Text style={styles.transferToName}>Nick Steven</Text>
    <Text style={styles.transferAmount}>-$910.90</Text>
</View>
<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person8.jpg")}></Image> 
    <Text style={styles.transferToName}>Feronica John</Text>
    <Text style={styles.transferAmount}>-$211.10</Text>
</View>
<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person9.jpg")}></Image> 
    <Text style={styles.transferToName}>Jack Smith</Text>
    <Text style={styles.transferAmount}>-$130.00</Text>
</View>

<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person3.jpg")}></Image> 
    <Text style={styles.transferToName}>Layla Sack</Text>
    <Text style={styles.transferAmount}>-$218.12</Text>
</View>
<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person4.jpg")}></Image> 
    <Text style={styles.transferToName}>Nina Philips</Text>
    <Text style={styles.transferAmount}>-$910.90</Text>
</View>
<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person2.jpg")}></Image> 
    <Text style={styles.transferToName}>Frank Jack</Text>
    <Text style={styles.transferAmount}>-$211.10</Text>
</View>
<View style={styles.recentTransferMoney}>
    <Image style={styles.transferToImage} source={require("../assets/person1.jpg")}></Image> 
    <Text style={styles.transferToName}>Nina Philips</Text>
    <Text style={styles.transferAmount}>-$130.00</Text>
</View>

</View>
</ScrollView>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
transferToImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    marginLeft: 15,
    top: 6
    },
firstScrollViewImage: {
    paddingLeft: 10,
},
recentTransferTitle: {
    marginHorizontal: 20,
    fontSize: 22,
    color: 'black',
    fontWeight: "600",
    marginBottom: 5,
    paddingHorizontal: 0,
    paddingVertical: 5,
    position: 'relative',
    top: 50,

    paddingLeft: 20,
    // backgroundColor: "#f2f2f2",
    // shadowOpacity: 3,
    bottom: 30,

},
recentTransferMoney: {
    marginHorizontal: 20,
    flexDirection: "row",
    height: 74,
    borderRadius: 35,
    backgroundColor: "#EDEEEF",
    margin: 5,
    top: 50,
    // width: 400,

},
transferToName: {
    paddingLeft: 90,
    alignContent: "center",
    justifyContent: "center",
    top: 24,
    fontWeight: "300",
    fontSize: 18
},
transferAmount: {
    marginLeft: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 24,
    fontWeight: "300",
    fontSize: 20,
    marginLeft: 10,
    paddingLeft: 10,
},
userNameContainer: {
    backgroundColor: "lightgrey",
    width: 500,
    height: 100,
}
});
