import {View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);

        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Sign in successful.');
        }catch(error: any) {
            console.log(error);
            alert('Sign in invalid. '+error.message);
        }finally{
            setLoading(false);
        }
    }

    const register = async () => {
        setLoading(true);

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Account registered successfully.');
        }catch(error: any) {
            console.log(error);
            alert('Registration invalid. '+error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value={email} style={styles.input} placeholder='E-mail' autoCapitalize='none'
                onChangeText={(text) => setEmail(text)}/>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none'
                onChangeText={(text) => setPassword(text)}/>

                { loading ? <ActivityIndicator size={'large'} color={"#0000ff"}/> 
                :
                <>
                <Button title="Login" onPress={signIn} />
                <Button title="Register" onPress={register} />
                </>
                }
            </KeyboardAvoidingView>
        </View>
    );
} 

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'

    }
})