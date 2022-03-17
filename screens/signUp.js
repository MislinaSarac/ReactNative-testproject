import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

const signUp = props => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={require('../android/app/src/assets/img/signup.png')}
                    resizeMode='center'
                    style={styles.image} />
                <Text style={styles.text}>Let's Get Started</Text >
                <Text style={styles.textTitle}>Create Account</Text >
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder={"Full name*"}
                    placeholderTextColor={'gray'}
                    autoCapitalize={'words'}
                    returnKeyType='next'
                ></TextInput>
                <TextInput style={styles.input}
                    placeholder={"Email adress*"}
                    placeholderTextColor={'gray'}
                    autoCapitalize={'none'}
                    autoCompleteType={'email'}
                    keyboardType={'email-address'}
                    returnKeyType='next'
                ></TextInput>
                <TextInput style={styles.input}
                    placeholder={"Password*"}
                    placeholderTextColor={'gray'}
                    secureTextEntry={true}
                    maxLength={8}
                    returnKeyType='next'
                ></TextInput>
                <TextInput style={styles.input}
                    placeholder={"Confirm password*"}
                    placeholderTextColor={'gray'}
                    secureTextEntry={true}
                    maxLength={8}
                    returnKeyType='next'
                ></TextInput>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
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
        width: 220,
        height: 220,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        // fontStyle: 'italic',
        fontSize: 29,

    },
    textTitle: {
        //color: 'black',
        color: 'indigo',
        fontSize: 25,
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
        // fontStyle: 'italic',
    },
    textButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 15,
    },
});
export default signUp;