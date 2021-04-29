import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Todo from '../components/Todo';

const About = ({navigation}) => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.aboutTitle}>
            About the App </Text>
            <Text style = {styles.subtitle}>This will entail a brief workflow of how the app works.</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBEC5D',
      },
      aboutTitle: {
        padding: 60,
        fontWeight: 'bold',
        fontSize: 34,
        color: '#FFFFFF',
        //fontFamily: 'Iowan Old Style',
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 12,
        textAlign: 'center',
        padding: 20,
      },
})

export default About;