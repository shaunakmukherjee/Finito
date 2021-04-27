import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Completed from '../screens/Completed';
import * as React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Completed" component={Completed} />
        </Tab.Navigator>
    );
}


export default Tabs;