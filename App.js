//import Home from "./data/componentes/screen/Home";
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './data/componentes/screens/Home';
import Addtodo from './data/componentes/screens/AddTodo';

const Stack = createNativeStackNavigator();

export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="App0zz"
      component={Home}
      options={{headerShown: true}}
      />
      <Stack.Screen
      name="Add"
      component={Addtodo}
      />

    </Stack.Navigator>
  </NavigationContainer>
);}

//export default function App() {return ( <Home/>);}


