import React, {useState} from 'react';
import { Alert, 
        Keyboard, 
        KeyboardAvoidingView, 
        Platform, 
        StyleSheet, 
        Text, 
        TextInput, 
        TouchableOpacity, 
        View } from 'react-native';
import Todo from '../components/Todo';
import { MaterialIcons } from '@expo/vector-icons'; 



export default function Home ({navigation}) {

    {/* Setting states for todos and list of todos */}

    const [todo, setTodo] = useState();
    const [todoList, setTodoList] = useState([]); //array for todos
    const [todoDone, setTodoDone] = useState([]);


    const handleNewTodo = (todo) => 
    {
    Keyboard.dismiss();
    // Putting validation checks for todos
    if(todo.length > 4){
        setTodoList ([...todoList, todo]);
        console.log('new todo!');
    }
    else{
        Alert.alert('No can do', 'Your goals must be greater than just 4 letters :)', [{
        text: 'Got it', onPress: () => console.log('alert removed')}])
    }
    //console.log(todo.length);
   setTodo(null); 
    }


    const finishTodo = (index) => 
    {
        let todo_aux = [...todoList];
        todo_aux.splice(index, 1);  //when todo is finished, remove it from list
        setTodoList(todo_aux);
        todoDone.push(todoList[index])
        console.log(todoDone, 'is completed')
        setTodoDone(todoDone);
        
        return todoDone;
    }

    


    return(
        <View style = {styles.container}>
      
            {/* Typing an new todo from keyboard */}
            <KeyboardAvoidingView
                behavior={Platform.select({android: undefined, ios: 'padding'})}
                style = {styles.writeTodoWrapper}>
                {/* setting dynamic state for easy input */}
                <TextInput style = {styles.input} placeholder = {'Type todo...'}
                value = {todo} onChangeText = {text => setTodo(text)}>
                
                </TextInput>  
            
                <TouchableOpacity onPress = {() => handleNewTodo(todo)}>
                    <View style = {styles.addWrapper}>
                      <MaterialIcons name="add-task" size={30} color= '#80BD72' />
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>

            <View style = {styles.todoWrapper}>
                <Text style = {styles.listTitle}>Your Reminders</Text>



                <View style = {styles.listoftodos}>
                        {/* All the reminders will be stored here!
                        NOTE: Todo key = {index} is not needed because of unique key prop
                        existing within Todo. */}
                {   
                   

                    todoList.map((item, index) => {
                        return(
                          <View>
                          <TouchableOpacity key = {index} onPress = {() => navigation.navigate('Completed', finishTodo(index)) }>
                            <Todo text = {item}></Todo>
                          </TouchableOpacity>
                          </View>
                         )
                    })
                }
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create
({
    container: {
      flex: 1,
      backgroundColor: '#80BD72',
    },
    todoWrapper: {
      marginTop: 40,
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    listTitle: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#FFFFFF',
      //fontFamily: 'Iowan Old Style',
      textAlign: 'center',
    },
    listoftodos: {
      marginTop: 70,
    },
    writeTodoWrapper: {
      top: 30,
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#FFF',
      width: 300,
      fontSize: 16,
      borderRadius: 60,
      borderColor: '#80BD72',
      borderWidth: 2,
    },
    addWrapper: {
      width:45,
      height:45,
      borderRadius: 60,
      backgroundColor: '#FFF',
      borderColor: '#4169E1',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    deleteTodo: {

    },

    addText:{
      fontSize: 40,
      color: 'blue',
    },
  });
  