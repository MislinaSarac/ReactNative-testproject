import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import signUp from './signUp';
import Login from './login';

//const Stack = createStackNavigator();
const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={signUp} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;