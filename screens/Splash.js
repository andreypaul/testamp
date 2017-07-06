import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    Animated,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import MainScreen from '../screens/MainScreen';


export default class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animLogo: new Animated.Value(0),
        }

    }

    componentDidMount() {
        Animated.timing(
            this.state.animLogo,
            {
                toValue: 90,
                duration: 5000,
            }
        ).start();
        setTimeout(()=> {
            Actions.MainScreen();
        }, 5000)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.animationContainer}>

                    <Image
                        source={require('../img/amp-logo-empty.png')}
                        style={styles.logoImg}
                    />

                    <Animated.Image
                        source={require('../img/amp-logo.png')}
                        style={{width: this.state.animLogo, height: 100, position: 'absolute'}}
                    />

                </View>
                <Text style={styles.logo}>
                    A M P
                </Text>
                <ActivityIndicator
                    color={'#8B572A'}
                    style={styles.indicator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    animationContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoImg: {
        height: 100,
        width: 90,
    },

    logo: {
        color: '#8B572A',
        fontSize: 34,
        fontFamily: 'Helvetica-Light',
    },

    indicator: {
        marginTop: 20
    }
});
