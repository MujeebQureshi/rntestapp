import {AsyncStorage} from 'react-native';

export default class Helper{

    _test = ()=>{
        console.log('Helper function called');
    }

    _storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
          return true;
        } catch (error) {
          // Error saving data
          return false;
        }
      };

    _retrieveData = async (key) => {
        //console.log(key);
        try {
          const value = await AsyncStorage.getItem(key);
          if (value) {
            // We have data!!
            console.log("this is the value: " + value);
            return value;
          }
          console.log("this value is def null");
          return null;

        } catch (error) {
            console.log("there is exception");
            return null;
            // Error retrieving data
        }
      };

      _deleteData = async (key) => {
        //console.log(key);
        try {
            await AsyncStorage.removeItem(key);
            console.log("hello this is key is now removed!!!");
            return true;
          
        } catch (error) {
            return false;
        }
      };


}