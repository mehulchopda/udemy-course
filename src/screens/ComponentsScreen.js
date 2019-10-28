import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const greetings='Bye there!'
const ComponentsScreen = () => {
    return (
    <View>
    <Text style={styles.textStyle}>This is the components screen</Text>
    <Text>{greetings}</Text>
    </View>)
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:50
    }
})

export default ComponentsScreen