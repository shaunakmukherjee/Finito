import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Todo from '../components/Todo';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const About = ({navigation}) => {

    return (
        <View style = {styles.container}>
          <LinearGradient
              colors={['#FBEC5D', 'transparent', 'white']}
              style={styles.background}
          />
            <Text style = {styles.aboutTitle}>
            About the App </Text>
            <Text style = {styles.subtitle}>{`This is an interactive to-do app, currently in its alpha phase. \n
            You write a to-do, and you finish it!`}</Text>

            <TouchableOpacity style = {{alignSelf: 'center'}} onPress = {() => navigation.navigate('Home')}>
              <View style = {styles.frontbutton}>
              <Ionicons name="arrow-forward" size={50} color="#FBEC5D" />
              </View>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#FBEC5D',
      },
      background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
      },
      frontbutton: {
        width: 60,
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#FBEC5D',
        borderRadius: 60,
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