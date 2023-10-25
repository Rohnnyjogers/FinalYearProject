import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from "./app/screens/Login";
import Home from './app/screens/Home';
import InternalLayout from './app/screens/InternalLayout';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      console.log('user', user);
      setUser(user);
    })
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? 
        (<Stack.Screen name="Internal" component={InternalLayout} options={{ headerShown: false }}/>)
        :
        (<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
