import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default Task;
