import React from 'react'
import {View, Text, StyleSheet} from "react-native"

function SecondaryScreen() {
  return (
    <View style={styles.container}>
        <Text>Secondary Screen</Text>
    </View>
  )
}

export default SecondaryScreen

const styles =  StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})