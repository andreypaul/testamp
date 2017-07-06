import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Splash from './screens/Splash';
import MainScreen from './screens/MainScreen';
import RouterApp from './screens/RouterApp';


export default class amp extends Component {
    render() {
        return(
            <RouterApp />
        );
    }
}

AppRegistry.registerComponent('amp', () => amp);
