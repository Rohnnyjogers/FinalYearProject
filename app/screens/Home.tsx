import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';

interface RouterProps{
    navigation: NavigationProp<any,any>;
}

const Home = ({navigation}: RouterProps) => {
    return(
        <View style={styles.container}>
           <Button onPress={() =>FIREBASE_AUTH.signOut()} title='Sign out'/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})