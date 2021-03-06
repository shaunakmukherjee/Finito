import React from 'react';
import { render } from 'react-dom';
import { Text, StyleSheet, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.development';
import Todo from '../components/Todo';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Completed = ({route, navigation}) => {

    const x = route.params;
    if(!x){
      return(
        <View style = {styles.container}>
          <LinearGradient
              colors={['#80BD72', 'transparent', 'white']}
              style={styles.background}
          />
            <Text style = {styles.listTitle}>
           Oh no!</Text>
            <Text style = {styles.subtitle}>{`You haven't completed any tasks yet!\n 
            Click the button below to start getting sh*t done.`}</Text>

            <TouchableOpacity style = {{alignSelf: 'center'}} onPress = {() => navigation.navigate('Home')}>
              <View style = {styles.backbutton}>
              <Ionicons name="arrow-back" size={50} color="#82CAFA" />
              </View>
            </TouchableOpacity>
        </View>
      );
    }
    else{
      const todoDone = Object.values(x);


      const deleteTodo = (index) => {
        let aux = [...todoDone]
        aux.splice(index, 1);
        //setdeleted(aux[index]);
        //deltodo.push(aux[index])
        console.log(aux, 'is the remaining list of completed todos')
        //settodo(aux);
        //console.log(setdeleted);
      }
      return (
          <View style = {styles.container}>
            <LinearGradient
              colors={['#80BD72', 'transparent', 'white']}
              style={styles.background}
          />
              <Text style = {styles.listTitle}>
              Your Completed Todos </Text>
              <Text style = {styles.subtitle}> Well done, you! </Text>

              <View style = {styles.todoWrapper}>  
                  <View style = {styles.donetodos}>              
                    <ScrollView>{
                      todoDone.map((todo) => {
                        return(
                          <TouchableOpacity key = {todo} onPress = {() => deleteTodo(todoDone.indexOf(todo))}>
                            <Todo text = {todo}></Todo>
                          </TouchableOpacity>
                        );
                      })
                    }
                    </ScrollView>
              </View>   
            </View>           
              
        </View>
      );
    }
}


const styles = StyleSheet.create({
      container: {
        flex: 1,
        //backgroundColor: '#80BD72',
      },
      background: {
        position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
      },
      backbutton: {
        width: 60,
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#82CAFA',
        borderRadius: 60,
      },
      todoWrapper: {
        marginTop: -10,
        paddingTop: 10,
        paddingHorizontal: 20,
      },
      listTitle: {
        padding: 40,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFFFFF',
        //fontFamily: 'Iowan Old Style',
        textAlign: 'center',
        marginBottom: -20,
      },
      subtitle: {
        fontSize: 14,
        textAlign: 'center',
        padding: 30,
        justifyContent: 'space-evenly',
      },

      donetodos: {
        marginTop: -10,
      },
})

export default Completed;