import React, { useState } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text, TouchableOpacity, TextInput, Platform, } from 'react-native';
import { color } from 'react-native-reanimated';
import Task from './Tasks';


export default function HomePage() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's  tasks</Text >
                <View style={styles.items}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

});
