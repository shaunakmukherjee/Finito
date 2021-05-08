import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
//import App from '../App';
//import Home from '../screens/Home'


const Todo = (props) => {
    
    return(
        <View style = {styles.todo}>
            {/* Each Todo will have 3 components:
            - Priority Square
            - Text
            - Delete button */}

            <View style = {styles.todobox}>
                <View style = {styles.square}></View>
                <Text style = {styles.todoText}>{props.text}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        borderStyle: 'dashed',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    todobox:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height:24,
        backgroundColor: '#00BFFF',
        opacity: 0.3,
        marginRight: 15,
    },
    todoText: {
        maxWidth: '80%',
    },
    todoDelete: {
         
    }
});

export default Todo;