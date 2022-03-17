/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
//import signUp from './screens/signUp'
import Login from './screens/login'

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Login);
