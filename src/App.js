import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar,View,Image } from 'react-native';
import Router from "./config/router";



const App = () => {
  return (
    <>
     <NavigationContainer>
      <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        <Router/>
    </NavigationContainer>
    
    </>
  );
};



export default App;
