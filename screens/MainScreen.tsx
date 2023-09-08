
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import DetailsScreen from './DetailsScreen';

export function MainScreen(props: any) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "home";

                    if(route.name === 'Home') {
                    }
                    else if (route.name === 'Details') {
                        iconName = 'list';
                    } else if (route.name === 'Contact') {
                        iconName = 'call';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                

            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});