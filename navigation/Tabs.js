import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Completed from '../screens/Completed';
import About from '../screens/About';
import * as React from 'react';
import { Alert, 
    KeyboardAvoidingView,  
    StyleSheet, 
    Text,  
    TouchableOpacity, 
    View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style : {...styles.navbar},
        }}
        >
            <Tab.Screen name="About" component={About} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.navicon}>
                    <Ionicons name="information-circle-outline" size={24} style={{color: focused? 'blue': 'grey'}}/>
                    <Text style={{color: focused? 'blue': 'grey', fontWeight:'bold', padding: 10}}> ABOUT</Text>
                    </View>
                )
                }}
            />

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.navicon}>
                    <Ionicons name="time-outline" size={24} style={{color: focused? 'blue': 'grey'}}/>
                    <Text style={{color: focused? 'blue': 'grey', fontWeight: 'bold',padding: 10}}> PENDING</Text>
                    </View>
                )
                }}
            />
            <Tab.Screen name="Completed" component={Completed} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.navicon}>
                    <Ionicons name="checkmark-circle-outline" size={24} style={{color: focused? 'blue': 'grey'}}/>
                    <Text style={{color: focused? 'blue': 'grey', fontWeight:'bold', padding: 10}}> COMPLETED</Text>
                    </View>
                )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    navicon: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
    },
    navbar: {
        position: 'absolute',
        bottom: 25,
        left: 15,
        right: 15,
        elevation: 0,
        borderRadius: 15,
        height: 90,
    },
})
export default Tabs;