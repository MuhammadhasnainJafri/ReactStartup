import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
var name= "Hasnain";
class SoftwareConstrunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"Muhammad Hasnain",
    Department:"UIIT",
   Degree:"BS Software engineering"
    }
  }

 render() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('./assets/logo.svg')} 
      style={{width:200,height:200,marginLeft:100,marginTop:30}}
      />
      <View style={styles.content}>
        <View style={styles.textWrapper}>
        
          <Text style={styles.hiText}>Name : {this.state.name}</Text>
          <Text style={styles.userText}>Department : {this.state.Department}</Text>
          <Text style={styles.userText}>Degree : {this.state.Degree} </Text>
        </View>

        <View style={styles.form}>
         

         
          <TextInput
            style={styles.inputfield}
          
            autoFocus={true}
            placeholder="Enter Your Name"
            placeholderTextColor="#929292"
            onChangeText={name=>this.setState({name})}
          />
          <TextInput
            style={styles.inputfield}
        
            autoFocus={true}
            placeholder="Enter your Department"
            placeholderTextColor="#929292"
            onChangeText={Department=>this.setState({Department})} 
          />
          <TextInput
            style={styles.inputfield}
          
            autoFocus={true}
            placeholder="Enter Your degree"
            placeholderTextColor="#929292"
            onChangeText={Degree=>this.setState({Degree })}
          />
          
          
        </View>

      
      </View>
    </SafeAreaView>
    
  );
}
}



const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2321",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 30,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 15,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 30,
    left: 22,
    zIndex: 10,
  },
  inputfield: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    marginTop:10,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default SoftwareConstrunction;