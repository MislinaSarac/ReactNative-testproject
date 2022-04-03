import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';

const Login = props => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={require('../android/app/src/assets/img/login.png')}
                    resizeMode='center'
                    style={styles.image} />

                <Text style={styles.text}>Welcome back,</Text>
                <Text style={styles.textTitle}>LOGIN</Text>

            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder={"Username*"}
                    placeholderTextColor={'gray'}
                    autoCapitalize={'words'}
                    returnKeyType='next'
                ></TextInput>
                <TextInput style={styles.input}
                    placeholder={"Password*"}
                    placeholderTextColor={'gray'}
                    autoCapitalize={'words'}
                    secureTextEntry={true}
                    maxLength={8}
                    returnKeyType='next'
                ></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textButton} on>
                    <Text style={styles.signUpText}>Sig Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justtifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,

    },
    text: {
        color: 'black',
        fontSize: 29,
        fontWeight: 'bold',

    },
    textTitle: {
        color: 'indigo',
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',

    },
    input: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: 'indigo',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 10,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        height: 52,
        backgroundColor: 'indigo',
        borderColor: 'indigo',
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 10,
        marginTop: 25,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
    },
    signUpText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    textButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 15,
    },
});
export default Login;   