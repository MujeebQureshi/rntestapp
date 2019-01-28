import PropTypes from 'prop-types';
import React, {Component} from 'react';
//import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';


class SideMenu extends Component {
  //this.navigateToScreen('Landing')
  constructor(){
	  super();
    this.state = { myText: "Hello", 
      menulist : [
        {
          menuId : 1,
          menuName : "Menu Item 1",
          menuPage : "Page1"
        },
        {
          menuId : 2,
          menuName : "Menu Item 2",
          menuPage : "Page2"
        },
        {
          menuId : 3,
          menuName : "Menu Item 3",
          menuPage : "Page3"
        }
      ] 
    };
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  Dothis = ()=>{
    this.setState(//previousState => (
        { myText: "hello boizzz" }
      //)
    );
  }
  
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.state.menulist.map((obj, key) => {
            return (
              <View style={styles.navSectionStyle} key={key}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen(obj.menuPage)}>
                {obj.menuName}
                </Text>
              </View>
            );
          })
        }
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10,
    fontSize: 15
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});

export default SideMenu;
