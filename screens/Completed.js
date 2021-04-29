import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import { useState } from 'react/cjs/react.development';
import Todo from '../components/Todo';

const Completed = ({route, navigation}) => {

    const x = route.params;
    const todoDone = Object.values(x);
    //console.log(todoDone);

    /* const removeTodo = (index) =>{
      todoDone.splice (index, 1);
    }*/
    //const { index } = route.params;
    return (
        <View style = {styles.container}>
            <Text style = {styles.listTitle}>
            Your Completed Todos </Text>
            <Text style = {styles.subtitle}>Well done, you.</Text>

            {/* todoDone is the list of completed todos, which are displayed here */}

             <View style = {styles.todoWrapper}>  
               <View style = {styles.donetodos}>
                {
                  todoDone.map((item, index) => {
                    return(
                      <View>
                        <Todo text = {item} />  
                      </View>
                    );
                  })
                }
                </View>   
              </View>

                 {/*<View style = {styles.todobox}>
                  <View style = {styles.square}></View>
                  <Text style={styles.todoText}>{todoDone[todoDone.length - 1]}</Text>
                </View> */}            

            
                        
            
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82CAFA',
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
      },

      donetodos: {
        marginTop: -10,
      },
})

export default Completed;