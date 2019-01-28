import React, {Component} from 'react';
import {TextInput, Alert, Button, StyleSheet, Text, View} from 'react-native';
import {USERID} from "../../appconstants.json"
import Helper from "./Helper";
import IOSIcon from "react-native-vector-icons/Ionicons";


export default class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.isUserLoggedIn();
  }

  isUserLoggedIn = async ()=>{
    var h = new Helper();
    var valKey = await h._retrieveData(USERID);
    if(valKey !== null){
      //return false;
      console.log("UserId is not null");
      this.props.navigation.navigate('Landing');
    }
    else{
      console.log("UserId is null");
      //this.props.navigation.navigate('Landing');
    }
    //return true;
  };

  onLoginButtonPress = async ()=>{
   console.log("I am pressed!");
   //Alert.alert('You tapped the button!')
    var h = new Helper();
    var valKey = await h._storeData(USERID, "Mujeeb");
    if(valKey){
      this.props.navigation.navigate('Landing');
    }
	  else{
      Alert.alert('Opps... Something went wrong!');
    }
  }
  //<Text style={styles.welcome}>Login Page</Text>
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
        <IOSIcon name="ios-person" size={30} style={{flex:1,padding:10, color:'#00BFFF'}}/>
        <TextInput style={{flex:10,fontSize: 15}} underlineColorAndroid="transparent" placeholder="Username"/>
        </View>
        <View style={{flexDirection:"row"}}>
        <IOSIcon name="ios-key" size={30} style={{flex:1,padding:10, color:'#00BFFF'}}/>
        <TextInput secureTextEntry={true} style={{flex:10,fontSize: 15}} underlineColorAndroid="transparent" placeholder="Password"/>
        </View>
        <View style={{paddingTop:10}}>
		    <Button
          title="Sign In"
          onPress={this.onLoginButtonPress} //() => this.props.navigation.navigate('Landing')
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding:20
  },
  
});
