import Tabs from './navigation/Tabs';
import * as React from 'react';
//import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';


export default function App() {

  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>  
  );
}
