import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

function DetailsScreen({ route, navigation }: any) {

    const userId = route.params?.userId;
    const userName = route.params?.userName;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Details Screen</Text>
            <Text style={{ color: '#1ACB97' }}>ID: {userId ??'userID'}</Text>
            <Text style={{ color: '#1ACB97' }}>Name: {userName ?? 'userName'}</Text>
            <Button title='Go to Contact'
            onPress={()=> navigation.navigate('Contact B')}
            />
        </View>
    );
}

export default DetailsScreen