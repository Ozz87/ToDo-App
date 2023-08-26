//algun error relacionado a IsHiden
import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, YellowBox, } from 'react-native';
import TodoList from '../TodoList';
import { todosData } from '../../todos';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [ localData, setLocalData] = React.useState(
    todosData.sort((a, b) => {return a.isCompleted - b.isCompleted})
  );

  const [isHidden, setIsHidden] = React.useState(false) ;
  const navigation = useNavigation();
  
  const handleHidePress = () =>  {
      if (isHidden) {
        setIsHidden(false)
        setLocalData(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}) )
        return;
      }
      setIsHidden(!isHidden)
      setLocalData(localData.filter(todo => !todo.isCompleted))
  }

 return ( 
      <View style={styles.container}>
        <Image
        source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-cleaning-1593202999.jpg'
      }}
      style={styles.pic}/>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={styles.title}>Today</Text>
      <TouchableOpacity onPress={handleHidePress}>
      <Text style={{ color: '#3478f6' }}>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
      </TouchableOpacity>
      </View>
     
      
      <TodoList todosData={localData.filter(todo => todo.isToday)} />  
      <Text style={styles.title}>Tomorrow</Text>  
      <TodoList todosData={localData.filter(todo => !todo.isToday)} />
      <TouchableOpacity style={styles.button}>
      <Text style={styles.plus}> + </Text>  
    
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({ 
    container:{
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 75,
    },
    pic: {
      width: 100,
      height: 100,
      borderRadius: 21,
      alignSelf: 'flex-end'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
      marginTop: 10,
      marginRight: 100,
    },

    
    button: {
      width: 42,
      height: 42, 
      borderRadius: 21,
      backgroundColor: '#000',
      position: 'absolute',
      bottom: 50,
      right: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,

        height: 2,
      },
    }  ,
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 5,
     


    plus: { 
      fontSize: 40,
      color: '#fff',
      position: 'absolute',
      top: -8,
      left: -3,
     }  
  });

    