import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Todo from '../components/Todo';

const Completed = ({route, navigation}) => {

    const todoDone  = route.params;
    console.log(todoDone);

    //const { index } = route.params;
    return (
        <View style = {styles.container}>
            <Text style = {styles.listTitle}>
            Your Completed Todos </Text>
            <Text style = {styles.subtitle}>Well done, you.</Text>

            <View style = {styles.donetodos}>

            {/* All the reminders will be stored here! */}
            
            <View style = {styles.todobox}>
              
                <View style = {styles.square}></View>
                <Text style = {styles.todoText}>{Object.values(todoDone)}</Text>
            </View>
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

      donetodos: {
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
})

export default Completed;