import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Details({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text
                onPress={() => alert('This is the "Settings" page.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Find a court</Text> */}
            <MapView 
                style={styles.map}
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

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });