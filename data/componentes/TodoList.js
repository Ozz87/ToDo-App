import React from "react";
import { todosData } from "../todos";
//import * as React from 'react';
import { FlatList, Text, View  } from "react-native";
import Todo from "./Todo";
import react from "react";


export default function TodoList( { todosData} ) {
    return (
        <FlatList 
            data={todosData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.text}</Text>
                    <Todo {...item} />
                </View>
            )}
        />
    )
 }


