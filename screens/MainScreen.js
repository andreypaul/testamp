import React, {Component} from 'react';
import Mapbox, {MapView} from 'react-native-mapbox-gl';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import BaseProfile from '../screens/BaseProfile';

const accessToken = 'pk.eyJ1IjoiYW5kcmV5cGF1bCIsImEiOiJjajIxczFzMTIwMDF3MnhwamVjeTBtc2luIn0.vEZ1ABl11ktV9Njfx47GBA';
Mapbox.setAccessToken(accessToken);

export default class MainScreen extends Component {
    state = {
        center: {
            latitude: 55.753500,
            longitude: 37.622367
        },
        zoom: 10,
        userTrackingMode: Mapbox.userTrackingMode.followWithHeading,
        annotations: [{
            coordinates: [55.786980, 37.584249],
            type: 'point',
            title: 'La Grange',
            subtitle: 'Репетиционная база La Grange',
            rightCalloutAccessory: {
                source: {uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/50747-200.png'},
                height: 25,
                width: 25
            },
            annotationImage: {
                source: {uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/50747-200.png'},
                height: 25,
                width: 25
            },
            id: 'marker1'
        },]
    };

    componentWillMount() {
        this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
            console.log('offline pack progress', progress);
        });
        this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
            console.log('offline max allowed tiles', tiles);
        });
        this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
            console.log('offline error', error);
        });
    }

    componentWillUnmount() {
        this._offlineProgressSubscription.remove();
        this._offlineMaxTilesSubscription.remove();
        this._offlineErrorSubscription.remove();
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={map => {
                        this._map = map;
                    }}
                    style={styles.map}
                    initialCenterCoordinate={this.state.center}
                    initialZoomLevel={this.state.zoom}
                    initialDirection={0}
                    logoIsHidden={true}
                    rotateEnabled={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    styleURL={Mapbox.mapStyles.light}
                    userTrackingMode={this.state.userTrackingMode}
                    annotations={this.state.annotations}
                    annotationsAreImmutable
                    onChangeUserTrackingMode={this.onChangeUserTrackingMode}
                    onRegionDidChange={this.onRegionDidChange}
                    onRegionWillChange={this.onRegionWillChange}
                    onOpenAnnotation={this.onOpenAnnotation}
                    onRightAnnotationTapped={this.onRightAnnotationTapped}
                    onUpdateUserLocation={this.onUpdateUserLocation}
                    onLongPress={this.onLongPress}
                    onTap={this.onTap}
                >
                </MapView>

                <ScrollView style={styles.scrollView}>

                    <TouchableOpacity onPress={Actions.BaseProfile}
                                      style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          height: 140,
                                          backgroundColor: '#FFFFFF',
                                          paddingLeft: 20,
                                          paddingRight: 20,
                                          borderBottomWidth: 0.5,
                                          borderBottomColor: 'gray',
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
                    </TouchableOpacity>


                    <TouchableOpacity onPress={Actions.BaseProfile}
                                      style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          height: 140,
                                          backgroundColor: '#FFFFFF',
                                          paddingLeft: 20,
                                          paddingRight: 20,
                                          borderBottomWidth: 0.5,
                                          borderBottomColor: 'gray',
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
                    </TouchableOpacity>


                    <TouchableOpacity onPress={Actions.BaseProfile}
                                      style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          height: 140,
                                          backgroundColor: '#FFFFFF',
                                          paddingLeft: 20,
                                          paddingRight: 20,
                                          borderBottomWidth: 0.5,
                                          borderBottomColor: 'gray',
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
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Actions.BaseProfile}
                                      style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          height: 140,
                                          backgroundColor: '#FFFFFF',
                                          paddingLeft: 20,
                                          paddingRight: 20,
                                          borderBottomWidth: 0.5,
                                          borderBottomColor: 'gray',
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
                    </TouchableOpacity>

                </ScrollView>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    map: {
        flex: 1.5
    },
    scrollView: {
        flex: 1,
    }
});