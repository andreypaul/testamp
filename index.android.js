import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Splash from './screens/Splash';
import MainScreen from './screens/MainScreen';


export default class amp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSplash: true,

        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showSplash: false
            });
        }, 5000);
    }

    render() {

        let show = null;

        if (this.state.showSplash === true) {
            show = <Splash/>
        } else {
            show = <MainScreen/>
        }

        return (
            <View style={styles.container}>
                {show}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('amp', () => amp);
