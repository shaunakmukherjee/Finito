import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Home from './Home'

const Completed = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.listTitle}>
            Your Completed Todos </Text>
            <Text style = {styles.subtitle}>Well done, you.</Text>

            <View style = {styles.listoftodos}>
                        {/* All the reminders will be stored here! */}
            </View>
        
        </View>
    
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82CAFA',
      },
      listTitle: {
        padding: 60,
        fontWeight: 'bold',
        fontSize: 24,
        //fontFamily: 'Iowan Old Style',
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 12,
        textAlign: 'center',
      },
      listoftodos: {
        marginTop: 70,
      },
})

export default Completed;