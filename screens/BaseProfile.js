import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    Animated,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class BaseProfile extends Component {
    render() {
        return(
            <ScrollView>
                <View style={styles.container} >
                    <View
                                      style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          height: 140,
                                          backgroundColor: '#FFFFFF',
                                          paddingLeft: 20,
                                          paddingRight: 20,
                                      }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'gray',
                            width: 80,
                            height: 80,

                            borderRadius: 45,
                        }}>
                            <Text style={{fontSize: 15, color: '#FFFFFF'}}>
                                La Grange
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 20}}>
                            <Text style={{fontSize: 26, fontFamily: 'Helvetica-Light'}}>La Grange</Text>
                            <Text>5-я ул. Ямского поля, д. 9</Text>
                            <Text>м. Белорусская</Text>
                        </View>
                        <TouchableOpacity onPress={Actions.pop}
                            style={{marginLeft: 70, marginBottom: 50}}>
                            <Image source={require('../img/closeIcon.png')}
                                    style={{width: 30, height: 30}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 20, backgroundColor: '#f0f0f0'}}/>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{uri: 'http://altertone.ru/images/main.jpg'}}
                               style={{width: 425, height: 300}}
                        />
                    </View>

                    <View style={{height: 20, backgroundColor: '#f0f0f0'}}/>

                    <View style={{justifyContent: 'center',height: 50}}>
                        <Text style={{marginLeft: 20}}>Количество комнат: 4</Text>
                    </View>

                    <View style={{height: 20, backgroundColor: '#f0f0f0'}}/>
                    <View style={{justifyContent: 'center',height: 50}}>
                        <Text style={{marginLeft: 20}}>Телефон: +7 (903) 784-33-66</Text>
                    </View>
                    <View style={{height: 20, backgroundColor: '#f0f0f0'}}/>

                    <View style={{justifyContent: 'center',height: 50}}>
                        <Text style={{marginLeft: 20}}>Смотреть расписание</Text>
                    </View>
                    <View style={{height: 20, backgroundColor: '#f0f0f0'}}/>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
});