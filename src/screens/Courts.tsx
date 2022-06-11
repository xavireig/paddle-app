import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Courts({ navigation }) {
    return (
        <View style={styles}>
            <MapView 
                style={mapStyle.map}
                loadingEnabled={true}
                region={{
                    latitude: 41.3828,
                    longitude: 2.13563,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.121
                }}
            />
        </View>
    );
}

const mapStyle = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66cc00',
    },
    characterList: {
        padding: 16,
    },
});