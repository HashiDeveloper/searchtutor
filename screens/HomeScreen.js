import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
  state = {
      email: "",
      displayName: ""
  };
  componentDidMount() {
      const { email, displayName } = firebase.auth().currentUser;

      this.setState({ email, displayName });
  }

  signOutUser = () => {
      firebase.auth().signOut();
  };

static navigationOptions = ({ navigation }) => ({
  title: "Welcome{this.state.displayName}",
})

  render() {
      return (
          <ScrollView>  
          <View style={styles.userNameContainer}> 
          <Text style={styles.displayName}>Welcome {this.state.displayName}!</Text> 
          <TouchableOpacity style={styles.userName} onPress={this.signOutUser}>
              <Image style={styles.logoutImage} source={require('../assets/logout.png')} />
              <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity> 
          </View> 
          

<View style = { styles.scrollViewHolder }>
<ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false } style={styles.scrollContainer}>

  <View style={styles.visaContainer}>
      <Image style={styles.visaImage} source={require("../assets/visa.png")} />
      <View style={styles.cardContainer}>
      <View style={styles.nameDataContainer}>
  <Text style={styles.cardName}>Mahamed Hashi</Text>
  <Text style={styles.cardExpireDate}>01 / 02</Text>
  </View>
  <Text style={styles.cardNumber}>4500 0899 8600 0898</Text>
</View>
</View>

<View style={styles.mastercardContainer}>
      <Image style={styles.mastercardImage}
      source={require("../assets/master.png")} />
  <View>
  <View style={styles.nameDataContainer}>
  <Text style={styles.cardName}>Mahamed Hashi</Text>
  <Text style={styles.cardExpireDate}>01 / 08</Text>
  </View>
  <Text style={styles.cardNumber}>6500 2199 7878 7878</Text>
</View>
</View>
<View style={styles.americancardContainer}>
      <Image style={styles.mastercardImage}
      source={require("../assets/american.png")} />
  <View>
  <View style={styles.nameDataContainer}>
  <Text style={styles.cardName}>Mahamed Hashi</Text>
  <Text style={styles.cardExpireDate}>01 / 08</Text>
  </View>
  <Text style={styles.cardNumber}>8500 2659 2222 3333</Text>
</View>
</View>
</ScrollView>

<View style={styles.balanceContainer}>
<Text style={styles.headerTitle}>Current Balance</Text>
<Text style={styles.headerSubtitle}>$ 4,599.75</Text>
</View>
<View style={styles.SendMoneyContainer}>
<Text style={styles.headerTitle}> Send Money</Text>
<ScrollView style={styles.firstScrollViewImage} horizontal = { true } showsHorizontalScrollIndicator = { false }>
          <TouchableOpacity>
      <View style={styles.addNewContainer}>
      <Text style={styles.addRecpient}>+</Text>
      <Text style={styles.addNew}>Add New</Text>
      
        {/* <Image style={styles.smallImage} source={require("../assets/plus.png")}></Image>   */}
      </View>
      </TouchableOpacity>
      <View style={styles.smallImageContainer}>
        <Image style={styles.smallImage} source={require("../assets/person2.jpg")}></Image>   
      </View>
      <View style={styles.smallImageContainer}>
        <Image style={styles.smallImage} source={require("../assets/person3.jpg")}></Image>   
      </View>
      <View style={styles.smallImageContainer}>
        <Image style={styles.smallImage} source={require("../assets/person4.jpg")}></Image>   
      </View>
      <View style={styles.smallImageContainer}>
        <Image style={styles.smallImage} source={require("../assets/person1.jpg")}></Image>   
      </View>

</ScrollView>
</View>
<View style={styles.recentTransfer}>
<Text style={styles.recentTransferTitle}>Recent Transactions </Text>
</View>

<View style={styles.recentTransferMoney}>
<Image style={styles.transferToImage} source={require("../assets/cart1.png")}></Image> 
<Text style={styles.transferToName}>Food</Text>
<Text style={styles.transferAmount}>-$218.12</Text>
</View>
<View style={styles.recentTransferMoney}>
<Image style={styles.transferToImage} source={require("../assets/salary.png")}></Image> 
<Text style={styles.transferToName}>Salary</Text>
<Text style={styles.transferAmount}>-$90.90</Text>
</View>
<View style={styles.recentTransferMoney}>
<Image style={styles.transferToImage} source={require("../assets/cloth.png")}></Image> 
<Text style={styles.transferToName}>Clothing</Text>
<Text style={styles.transferAmount}>-$211.10</Text>
</View>
<View style={styles.recentTransferMoney}>
<Image style={styles.transferToImage} source={require("../assets/home.png")}></Image> 
<Text style={styles.transferToName}>Rent</Text>
<Text style={styles.transferAmount}>-$630.00</Text>
</View>
</View>
</ScrollView> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  userName: {
      margin: 10,
      position: 'absolute',
      paddingLeft: 10,
      top: 40,
      fontSize: 20,
      fontWeight: "200",
      flexDirection: "row",

  },
  displayName: {
      marginTop: 0,
      position: 'absolute',
      paddingLeft: 220,
      top: 50,
      margin: 10,
      fontSize: 20,
      fontWeight: "400",
  },
  logout: {
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 5,
  },
  img: {
      width: 160,
      height: 160,
      justifyContent: 'center',
      margin: 10,
      borderRadius: 10,
    },
    heroImage: {
      backgroundColor: 'transparent',
      height: 200,
      width: null,
      justifyContent: "center",
      alignItems: "center",
      position: 'relative',
      marginTop: 20
    },
    headerTitle: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 22,
      color: 'black',
      fontWeight: "600",
      marginBottom: 5,
      paddingHorizontal: 0,
      paddingVertical: 5,
      position: 'relative',
      top: 0,
      paddingLeft: 20,

      bottom: 20,
    },
    recentTransferTitle: {

          fontSize: 22,
          color: 'black',
          fontWeight: "600",
          marginBottom: 5,
          paddingHorizontal: 0,
          paddingVertical: 5,
          position: 'relative',
          top: 40,
          paddingLeft: 20,
          bottom: 30,
    },
    headerSubtitle: {
      fontSize: 28,
      fontWeight: '800',
      marginBottom: 12,
      paddingHorizontal: 24,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      color: "black",
    },
    scrollViewHolder: {
      top: 0,
    },
  mastercardContainer: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'column',
      backgroundColor: "#FC2924",
      borderRadius: 15,
      paddingLeft: 10,
      margin: 10,
      width: 330,
      height: 200,
    },
    americancardContainer: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'column',
      backgroundColor: "#2866B1",
      borderRadius: 15,
      paddingLeft: 10,
      margin: 10, 
      width: 330,
      height: 200,
    },
    visaContainer: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'column',
      backgroundColor: "#693EDD",
      borderRadius: 15,
      paddingLeft: 10,
      margin: 10,
      width: 330,
      height: 200,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 3
    },
    visaImage: {
      width: 80,
      height: 80,
      borderRadius: 3,
      top: 0,
      left: 10
    },
    mastercardImage: {
      width: 80,
      height: 80,
      borderRadius: 3,
      top: 0,
      left: 10
    },
    title: {
      fontSize: 24,
      fontWeight: "500",
      marginBottom: 4,
      paddingHorizontal: 20,
      paddingVertical: 5,
      justifyContent: "center",
      alignItems: "center",
      position: 'relative',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 12,
      paddingHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
      top: 10
    },
    subtitleHome: {
      fontSize: 36,
      fontWeight: '600',
      marginBottom: 12,
      paddingHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
      color: "white", 
    },
    description: {
      fontSize: 22,
      color: 'purple',
      fontWeight: "800",
      marginBottom: 2,
      paddingHorizontal: 65,
      paddingVertical: 5,
      justifyContent: "center",
      alignItems: "center",
      position: 'absolute',
      top: 260,
    },
    price: {
      color: 'red',
      fontSize: 20,
      paddingHorizontal: 20,
    },
    detailsContainer: {
      flex: 2,
      position: 'relative',
      backgroundColor: "grey",
      width: 420,
      height: 200,
      top: 60,
    },
    scrollContainer: {
      position: 'relative',
      top: 20,
    },
    cardNumber: {
        color: "white",
        fontSize: 25,
        fontWeight: "700",
        top: 10
    },
    cardName: {
        color: "white",
        fontSize: 22,
        fontWeight: "400",
        top: 2,
    },
    cardExpireDate: {
        color: "white",
        fontSize: 18,
        fontWeight: "400",
        paddingLeft: 30,
        top: 2
    },
    balanceContainer: {
        top:30,
    },
    SendMoneyContainer: {
      top:40,
    },
    smallImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      margin: 10,
      position: 'absolute',
      },
      smallImageContainer: {
          width: 100,
          height: 100,
      },
      addRecpient: {
        fontWeight: "400",
        fontSize: 32,
        marginLeft: 30,

      },
      addNewContainer: {
        width: 80,
        height: 80,
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 40,
        margin: 10,
      },
      addNew: {
        fontWeight: "100",
        fontSize: 16,
        marginLeft: 6,
      },
      transferToImage: {
          width: 60,
          height: 60,
          position: 'absolute',
          marginLeft: 15,
          top: 6
          },
      firstScrollViewImage: {
          paddingLeft: 10,
      },
      recentTransferMoney: {
        marginHorizontal: 20, 
          flexDirection: "row",
          height: 74,
          borderRadius: 25,
          backgroundColor: "#EDEEEF",
          margin: 5,
          top: 40,
          shadowOpacity: 0.1,
      },
      transferToName: {
          paddingLeft: 110,
          alignContent: "center",
          justifyContent: "center",
          top: 24,
          fontWeight: "500",
          fontSize: 24,
      },
      transferAmount: {
          paddingLeft: 90,
          alignContent: "center",
          justifyContent: "center",
          top: 24,
          fontWeight: "300",
          fontSize: 18,
      },
      userNameContainer: {
          backgroundColor: "#EDEEEF",
          width: 500,
          height: 100,
          shadowOpacity: 1
      },
      nameDataContainer: {
        flexDirection: "row",
      },
      logoutImage: {
        marginLeft:5, 
        height:22, 
        width: 22,
        top: 2,
      }
});