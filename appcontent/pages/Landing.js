import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Helper from "./Helper";
import {USERID} from "../../appconstants.json"

export default class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.isUserLoggedIn();
  }
  
  isUserLoggedIn = async ()=>{
    var h = new Helper();
    var valKey = await h._retrieveData(USERID);
    if(valKey !== null){
      //return false;
      console.log("UserId is not null");
      //this.props.navigation.navigate('Landing');
    }
    else{
      console.log("UserId is null");
      this.props.navigation.navigate('Login');
    }
    //return true;
  };


	componentDidMount(){
		
	}
	
  render() {
	//resetStack();
	//this.props.navigation.dispatch(resetAction);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Landing Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});