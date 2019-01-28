import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import Login from './appcontent/pages/Login';
import Landing from './appcontent/pages/Landing';
import SideMenu from './appcontent/pages/SideMenu'
import Helper from "./appcontent/pages/Helper";
import NavigationService from './NavigationService';
import {USERID} from "./appconstants.json"

isUserLoggedIn = async ()=>{
  var h = new Helper();
  var valKey = await h._retrieveData(USERID);
  if(valKey !== null){
    console.log("UserId is not null");
    //this.props.navigation.navigate('Landing');
    return true;
  }
  else{
    console.log("UserId is null");
    //this.props.navigation.navigate('Landing');
    return false;
  }
  //return true;
};

LogUserOut = async ()=>{
  var h = new Helper();
  var valKey = await h._deleteData(USERID);
  if(valKey){
    console.log("here navigator");
    //return false;
    NavigationService.navigate('Login', {});
    //this.props.navigation.navigate('Landing');
  }
  else{
    
  }
  
};

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: Login,
	  navigationOptions: {
      title: "Sign In",
      headerStyle: {
        backgroundColor: '#00BFFF'
      },
      headerTitleStyle: { color: 'white' }
		}
    },
  },
);


const stackNav =  createStackNavigator({
  Landing : {
    screen: Landing,
    navigationOptions: ({navigation}) => ({
      title: "Home",
      headerLeft:(<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <IOSIcon name="ios-menu" size={30} style={{padding:10, color:'white'}}/>
                  </TouchableOpacity>
      ),
	  headerRight : (<TouchableOpacity onPress={LogUserOut}>
						<IOSIcon name="ios-log-out" size={30} style={{padding:10, color:'white'}} />
					</TouchableOpacity>
    ),
      headerStyle: {
        backgroundColor: '#00BFFF'
      },
      headerTitleStyle: { color: 'white' }
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
}
);


const LandingDrawerStack = createDrawerNavigator({
  stackNav: {
      screen: stackNav
    },
},
{
	contentComponent: SideMenu,
	drawerWidth: Dimensions.get('window').width - 120,  
}
);

const AppNavigator = createSwitchNavigator({
  LoginStack: { screen : LoginStack }, // This screen renders a navigator!
  LandingDrawerStack: { screen : LandingDrawerStack },
},
{
	initialRouteName: (!isUserLoggedIn)? 'LoginStack' : 'LandingDrawerStack',
}
);

const AppContainer = createAppContainer(AppNavigator);//(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer 
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />;
  }
}