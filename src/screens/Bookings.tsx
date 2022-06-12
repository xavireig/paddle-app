import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BookingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/bookings.png')} />

        </View>
    );
}