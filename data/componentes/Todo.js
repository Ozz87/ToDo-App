import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";


export default function Todo(
    {
        id,
        text,
        isCompleted,
        isToday,
        hour,
    }
){
    return (
        <View style={styles.container}>
            <Checkbox
             id={id}
             text={text}
             isCompleted={isCompleted}
             isToday={isToday}
             hour={hour}
            /> 
           <Text style={
    isCompleted 
    ? [styles.text, { textDecorationLine: 'line-through', color: '#f0f' }]
    : styles.text
    }>{text}</Text>
            <Text style={
    isCompleted 
    ? [styles.time, { textDecorationLine: 'line-through', color: '#f2f' }]
    : styles.time
    }>{hour}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#73737373',
    },
    time:{
       fontSize: 13,
       fontWeight: '500',
       color: 'blue',
}
})