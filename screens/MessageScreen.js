
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class MessageScreen extends React.Component {
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
  <View style={styles.buttonContainer}>
      {/* <Button style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
      </Button> */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
  </View>

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
        // height: 40,
        fontSize: 20,
        // paddingLeft: 20,
        borderBottomColor: '#E0DEDE',
        borderBottomWidth: 1,
        borderColor: 'gray',
        // width: 400,
        margin: 20,
        // top: 8,
    },
    AmountContainer: {
        flexDirection: "row",
        // padding: 20,
        margin: 1,
    },
    AmountInerContainer: {
        // backgroundColor: "lightgrey",
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
        // borderWidth: 1,
        // shadowOpacity: 0.4,
    },
    Amount: {
        fontWeight:"100",
        fontSize: 18,
        top: 16,
        paddingLeft: 16
    },
    button: {
        alignContent: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 12,
    },
    buttonContainer: {
        backgroundColor: "black",
        width: 350,
        height: 60,
        padding: 20,
        margin: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: "#ffff",
        fontWeight: "500",
        paddingLeft: 140,
        fontSize: 22,
        
    }
});


// import React from "react";
// import { View, Text, StyleSheet, Picker, TextInput, Option } from "react-native";
// import { OptionsButton } from 'react-native-options-button';
// import RNPickerSelect from 'react-native-picker-select';
// // import React, { Component } from "react";

// // export default class MessageScreen extends React.Component {

// //     constructor(props) {
// //         super(props); 

// //         this.state = {
// //             currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
// //             base: "USD",
// //             amount: "",
// //             convertTo: "EUR",
// //             result: "",
// //             date: ""
// //           };        
        
// //         this.handleSelect = this.handleSelect.bind(this); 
// //     }

// //     handleSelect(event) {
// //         this.setState(
// //           {
// //             [event.target.name]: event.target.value,
// //             result: null
// //           },
// //           this.calculate
// //         );
// //       };    

// //     //   handleSelect = e => {
// //     //     this.setState(
// //     //       {
// //     //         [e.target.name]: e.target.value,
// //     //         result: null
// //     //       },
// //     //       this.calculate
// //     //     );
// //     //   };
    
// //       handleInput = e => {
// //         this.setState(
// //           {
// //             amount: e.target.value,
// //             result: null,
// //             date: null
// //           },
// //           this.calculate
// //         );
// //       };
    
// //       calculate = () => {
// //         const amount = this.state.amount;
// //         if (amount === isNaN) {
// //           return;
// //         } else {
// //           fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
// //             .then(res => res.json())
// //             .then(data => {
// //               const date = data.date;
// //               const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
// //               this.setState({
// //                 result,
// //                 date
// //               });
// //             });
// //         }
// //       };
    
// //       handleSwap = e => {
// //         const base = this.state.base;
// //         const convertTo = this.state.convertTo;
// //         e.preventDefault();
// //         this.setState(
// //           {
// //             convertTo: base,
// //             base: convertTo,
// //             result: null
// //           },
// //           this.calculate
// //         );
// //       };
// //     render() {
// //         const { currencies, base, amount, convertTo, result, date } = this.state;
// //         return (
// //         <View style={styles.container}>

// //         <View style={styles.container}>
// //         <View style={styles.inerContainer}>
// //           <View style={styles.deepInerContainer}>
// //             <View style={styles.body}>
// //               <Text>
// //                 {amount} {base} is equevalent to
// //               </Text>
// //               <Text>
// //                 {amount === ""
// //                   ? "0"
// //                   : result === null
// //                   ? "Calculating..."
// //                   : result}{" "}
// //                 {convertTo}
// //               </Text>
// //               <Text>As of {amount === "" ? "/ / /" : date === null ? "" : date}</Text>
// //               <View style={styles.body1}>
// //                 <View style={styles.body2r}>
// //                   <Form style={styles.body3}>
// //                     <TextInput
// //                       type="number"
// //                       value={amount}
// //                       onChange={this.handleInput}
// //                     //   className="form-control form-control-lg mx-3"
// //                     />
// //                     <Picker>
// //                       name="base"
// //                       value={base}
// //                       onChange={this.handleSelect}
// //                     {/* //   className="form-control form-control-lg" */}
// //                     >
// //                       {currencies.map(currency => (
// //                         <Option key={currency} value={currency}>
// //                           {currency}
// //                         </Option>
// //                       ))}
// //                       </Picker>
// //                   </Form>

// //                   <Picker style={styles.form}>
// //                     <TextInput
// //                       disabled={true}
// //                       value={
// //                         amount === ""
// //                           ? "0"
// //                           : result === null
// //                           ? "Calculating..."
// //                           : result
// //                       }
// //                     //   className="form-control form-control-lg mx-3"
// //                     />
// //                     <Picker
// //                       name="convertTo"
// //                       value={convertTo}
// //                       onChange={this.handleSelect}
// //                     //   className="form-control form-control-lg"
// //                     >
// //                       {currencies.map(currency => (
// //                         <Option key={currency} value={currency}>
// //                           {currency}
// //                         </Option>
// //                       ))}
// //                     </Picker>
// //                   </Picker>
// //                 </View>

// //                 <View style={styles.inerform}>
// //                   <Text onClick={this.handleSwap} style={styles.swap}>
// //                     {/* &#8595;&#8593; */}
// //                   </Text>
// //                 </View>
// //               </View>
// //             </View>
// //           </View>
// //         </View>
// //         </View>
// //         </View>
// //         )
// //     }
// // };
// // // export default MessageScreen;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: "center",
// //         justifyContent: "center"
// //     }
// // });


// // import React from "react";
// // import { View, Text, StyleSheet } from "react-native";

// // export default class MessageScreen extends React.Component {
// //     render() {
// //         return (
// //             <View style={styles.container}>
// //                 <Text>MessageScreen</Text>
// //             </View>
// //         );
// //     }
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: "center",
// //         justifyContent: "center"
// //     }
// // });





// // import React, { Component } from "react";

// export default class MessageScreen extends React.Component {
//   state = {
//     currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
//     base: "USD",
//     amount: "",
//     convertTo: "EUR",
//     result: "",
//     date: ""
//   };

// //   handleSelect = e => {
// //     this.setState(
// //       {
// //         [e.target.name]: e.target.value,
// //         result: null
// //       },
// //       this.calculate
// //     );
// //   };

// //   handleInput = e => {
// //     this.setState(
// //       {
// //         amount: e.target.value,
// //         result: null,
// //         date: null
// //       },
// //       this.calculate
// //     );
// //   };
// handleSelect = e => {
//     this.setState(
//       {
//         [e.target.name]: e.target.value,
//         result: null
//       }
//       // this.calculate
//     );
//   };

//   handleInput = e => {
//     this.setState(
//       {
//         amount: e.target.value,
//         result: null,
//         date: null
//       },
//       this.calculate
//     );
//   };


//   calculate = () => {
//     const amount = this.state.amount;
//     if (amount === isNaN) {
//       return;
//     } else {
//       fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(result)
//           const date = data.date;
//           const result = parseFloat(data.rates[this.state.convertTo]) * parseFloat(amount) .toFixed(4)
//           console.log(data.rates[this.state.convertTo], this.state.amount )
//           this.setState({
//             result: result,
//             date: date
//           });
//         });
//     }
//   };

//   handleSwap = e => {
//     const base = this.state.base;
//     const convertTo = this.state.convertTo;
//     e.preventDefault();
//     this.setState(
//       {
//         convertTo: base,
//         base: convertTo,
//         result: null
//       },
//     );
//     this.calculate()
//   };
//   render() {
//     const { currencies, base, amount, convertTo, result, date } = this.state;
//     return (

//             <View style={styles.outerContainer}>
//              <Text>
//                 {amount} {base} is equevalent to
//               </Text>
//               <Text>
//                 {amount === ""
//                   ? ""
//                   : result === null
//                   ? "Calculating..."
//                   : result}{" "}
//                 {convertTo}
//               </Text> 
//               <Text>As of {amount === "" ? "/ / /" : date === null ? "" : date}</Text>
//                 <View>
//                 <TextInput style={styles.inputField}
//                       type="number"
//                       value={this.state.amount}
//                       onChange={this.handleInput}
//                 />
//                 <Picker
//                       name="base"
//                       value={base}
//                       onChange={this.handleSelect}
//                       >
//                         {currencies.map(currency => (
//                         <OptionsButton key={currency} value={currency}>
//                           {currency}
//                         </OptionsButton>
//                       ))}  
//                       </Picker>
//                       <TextInput style={styles.inputField}
//                         disabled={true}
//                       value={
//                         amount === ""
//                           ? "0"
//                           : result === null
//                           ? "Calculating..."
//                           : JSON.stringify(result)
//                       }
//                       />
//                       <Picker
//                       name="convertTo"
//                       value={convertTo}
//                       onChange={this.handleSelect}
//                       >
//                       {currencies.map(currency => (
//                         <OptionsButton key={currency} value={currency}>
//                           {currency}
//                         </OptionsButton>
//                       ))}
//                       </Picker>
//                 </View>
//                 {/* <View>
//                   <Text onClick={this.handleSwap}>
//                     &#8595;&#8593;
//                   </Text>
//                 </View> */}
//               </View>
//             // </View>

//     );
//   }
// }

// const styles = StyleSheet.create({
//     outerContainer: {
//         flex: 1,
// width: "70%"
//     },
//     inputField: {
//     borderColor: "black",
//         borderWidth: 2
//     }
// });








// // import React from "react";
// // import { View, Text, StyleSheet, Picker, TextInput } from "react-native";
// // // import React, { Component } from "react";

// // // export default class MessageScreen extends React.Component {

// // //     constructor(props) {
// // //         super(props); 

// // //         this.state = {
// // //             currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
// // //             base: "USD",
// // //             amount: "",
// // //             convertTo: "EUR",
// // //             result: "",
// // //             date: ""
// // //           };        
        
// // //         this.handleSelect = this.handleSelect.bind(this); 
// // //     }

// // //     handleSelect(event) {
// // //         this.setState(
// // //           {
// // //             [event.target.name]: event.target.value,
// // //             result: null
// // //           },
// // //           this.calculate
// // //         );
// // //       };    

// // //     //   handleSelect = e => {
// // //     //     this.setState(
// // //     //       {
// // //     //         [e.target.name]: e.target.value,
// // //     //         result: null
// // //     //       },
// // //     //       this.calculate
// // //     //     );
// // //     //   };
    
// // //       handleInput = e => {
// // //         this.setState(
// // //           {
// // //             amount: e.target.value,
// // //             result: null,
// // //             date: null
// // //           },
// // //           this.calculate
// // //         );
// // //       };
    
// // //       calculate = () => {
// // //         const amount = this.state.amount;
// // //         if (amount === isNaN) {
// // //           return;
// // //         } else {
// // //           fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
// // //             .then(res => res.json())
// // //             .then(data => {
// // //               const date = data.date;
// // //               const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
// // //               this.setState({
// // //                 result,
// // //                 date
// // //               });
// // //             });
// // //         }
// // //       };
    
// // //       handleSwap = e => {
// // //         const base = this.state.base;
// // //         const convertTo = this.state.convertTo;
// // //         e.preventDefault();
// // //         this.setState(
// // //           {
// // //             convertTo: base,
// // //             base: convertTo,
// // //             result: null
// // //           },
// // //           this.calculate
// // //         );
// // //       };
// // //     render() {
// // //         const { currencies, base, amount, convertTo, result, date } = this.state;
// // //         return (
// // //         <View style={styles.container}>

// // //         <View style={styles.container}>
// // //         <View style={styles.inerContainer}>
// // //           <View style={styles.deepInerContainer}>
// // //             <View style={styles.body}>
// // //               <Text>
// // //                 {amount} {base} is equevalent to
// // //               </Text>
// // //               <Text>
// // //                 {amount === ""
// // //                   ? "0"
// // //                   : result === null
// // //                   ? "Calculating..."
// // //                   : result}{" "}
// // //                 {convertTo}
// // //               </Text>
// // //               <Text>As of {amount === "" ? "/ / /" : date === null ? "" : date}</Text>
// // //               <View style={styles.body1}>
// // //                 <View style={styles.body2r}>
// // //                   <Form style={styles.body3}>
// // //                     <TextInput
// // //                       type="number"
// // //                       value={amount}
// // //                       onChange={this.handleInput}
// // //                     //   className="form-control form-control-lg mx-3"
// // //                     />
// // //                     <Picker>
// // //                       name="base"
// // //                       value={base}
// // //                       onChange={this.handleSelect}
// // //                     {/* //   className="form-control form-control-lg" */}
// // //                     >
// // //                       {currencies.map(currency => (
// // //                         <Option key={currency} value={currency}>
// // //                           {currency}
// // //                         </Option>
// // //                       ))}
// // //                       </Picker>
// // //                   </Form>

// // //                   <Picker style={styles.form}>
// // //                     <TextInput
// // //                       disabled={true}
// // //                       value={
// // //                         amount === ""
// // //                           ? "0"
// // //                           : result === null
// // //                           ? "Calculating..."
// // //                           : result
// // //                       }
// // //                     //   className="form-control form-control-lg mx-3"
// // //                     />
// // //                     <Picker
// // //                       name="convertTo"
// // //                       value={convertTo}
// // //                       onChange={this.handleSelect}
// // //                     //   className="form-control form-control-lg"
// // //                     >
// // //                       {currencies.map(currency => (
// // //                         <Option key={currency} value={currency}>
// // //                           {currency}
// // //                         </Option>
// // //                       ))}
// // //                     </Picker>
// // //                   </Picker>
// // //                 </View>

// // //                 <View style={styles.inerform}>
// // //                   <Text onClick={this.handleSwap} style={styles.swap}>
// // //                     {/* &#8595;&#8593; */}
// // //                   </Text>
// // //                 </View>
// // //               </View>
// // //             </View>
// // //           </View>
// // //         </View>
// // //         </View>
// // //         </View>
// // //         )
// // //     }
// // // };
// // // // export default MessageScreen;

// // // const styles = StyleSheet.create({
// // //     container: {
// // //         flex: 1,
// // //         alignItems: "center",
// // //         justifyContent: "center"
// // //     }
// // // });


// // // import React from "react";
// // // import { View, Text, StyleSheet } from "react-native";

// // // export default class MessageScreen extends React.Component {
// // //     render() {
// // //         return (
// // //             <View style={styles.container}>
// // //                 <Text>MessageScreen</Text>
// // //             </View>
// // //         );
// // //     }
// // // }

// // // const styles = StyleSheet.create({
// // //     container: {
// // //         flex: 1,
// // //         alignItems: "center",
// // //         justifyContent: "center"
// // //     }
// // // });





// // // import React, { Component } from "react";

// // export default class MessageScreen extends React.Component {
// //   state = {
// //     currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
// //     base: "USD",
// //     amount: "",
// //     convertTo: "EUR",
// //     result: "",
// //     date: ""
// //   };

// //   handleSelect = e => {
// //     this.setState(
// //       {
// //         [e.target.name]: e.target.value,
// //         result: null
// //       },
// //       this.calculate
// //     );
// //   };

// //   handleInput = e => {
// //     this.setState(
// //       {
// //         amount: e.target.value,
// //         result: null,
// //         date: null
// //       },
// //       this.calculate
// //     );
// //   };

// //   calculate = () => {
// //     const amount = this.state.amount;
// //     if (amount === isNaN) {
// //       return;
// //     } else {
// //       fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
// //         .then(res => res.json())
// //         .then(data => {
// //             console.log(data)
// //           const date = data.date;
// //           const result = parseFloat(data.rates[this.state.convertTo]) * parseFloat(amount) .toFixed(4)
// //           console.log(data.rates[this.state.convertTo], this.state.amount )
// //           this.setState({
// //             result: result,
// //             date: date
// //           });
// //         });
// //     }
// //   };

// //   handleSwap = e => {
// //     const base = this.state.base;
// //     const convertTo = this.state.convertTo;
// //     e.preventDefault();
// //     this.setState(
// //       {
// //         convertTo: base,
// //         base: convertTo,
// //         result: null
// //       },
// //     );
// //     this.calculate()
// //   };
// //   render() {
// //     const { currencies, base, amount, convertTo, result, date } = this.state;
// //     return (

// //             <View style={styles.outerContainer}>
// //              <Text>
// //                 {amount} {base} is equevalent to
// //               </Text>
// //               <Text>
// //                 {amount === ""
// //                   ? ""
// //                   : result === null
// //                   ? "Calculating..."
// //                   : result}{" "}
// //                 {convertTo}
// //               </Text> 
// //               <Text>As of {amount === "" ? "/ / /" : date === null ? "" : date}</Text>
// //                 <View>
// //                 <TextInput style={styles.inputField}
// //                       type="number"
// //                       value={this.state.amount}
// //                       onChange={this.handleInput}
// //                 />
// //                 <Picker
// //                       name="base"
// //                       value={base}
// //                       onChange={this.handleSelect}
// //                       >
// //                         {currencies.map(currency => (
// //                         <dropDown key={currency} value={currency}>
// //                           {currency}
// //                         </dropDown>
// //                       ))}  
// //                       </Picker>
// //                       <TextInput style={styles.inputField}
// //                         disabled={true}
// //                       value={
// //                         amount === ""
// //                           ? "0"
// //                           : result === null
// //                           ? "Calculating..."
// //                           : JSON.stringify(result)
// //                       }
// //                       />
// //                       <Picker
// //                       name="convertTo"
// //                       value={convertTo}
// //                       onChange={this.handleSelect}
// //                       >
// //                       {currencies.map(currency => (
// //                         <dropDown key={currency} value={currency}>
// //                           {currency}
// //                         </dropDown>
// //                       ))}
// //                       </Picker>
// //                 </View>
// //                 {/* <View>
// //                   <Text onClick={this.handleSwap}>
// //                     &#8595;&#8593;
// //                   </Text>
// //                 </View> */}
// //               </View>
// //             // </View>

// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //     outerContainer: {
// //         flex: 1,
// // width: "70%"
// //     },
// //     inputField: {
// //     borderColor: "black",
// //         borderWidth: 2
// //     }
// // });