import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Splash from '../screens/Splash'
import MainScreen from '../screens/MainScreen';
import BaseProfile from '../screens/BaseProfile';

export  default class RouterApp extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="Splash"
                        initial={true}
                        component={Splash}
                        hideNavBar={true}
                    />
                    <Scene
                        key="MainScreen"
                        component={MainScreen}
                        hideNavBar={true}
                    />
                    <Scene
                        key="BaseProfile"
                        component={BaseProfile}
                        hideNavBar={true}
                        direction="vertical"
                    />
                </Scene>
            </Router>
        );
    }
}