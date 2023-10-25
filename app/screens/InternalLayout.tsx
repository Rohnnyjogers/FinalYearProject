import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Rewards from './Rewards';
import Profile from './Profile';
import Saved from './Saved';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../navigator/TabNavigator';

const Stack = createNativeStackNavigator();

const InternalLayout = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='InternalLanding'
                component={TabNavigator}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default InternalLayout;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})