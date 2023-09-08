import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import ContactAScreen from './ContactAScreen';
import ContactBScreen from './ContactBScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 function ContactScreen(props: any) {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Contact A"
                component={ContactAScreen} />
            <Stack.Screen
                name="Contact B"
                component={ContactBScreen} />
        </Stack.Navigator>
    );
}

export default ContactScreen