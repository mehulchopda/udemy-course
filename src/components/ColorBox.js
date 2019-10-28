import React,{useState} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const ColorBox = ({boxBgColor}) => {
    console.log(boxBgColor)
    return (
    <View style={{
        height:100,
        width:100,
        backgroundColor:boxBgColor
    }}>
    <Text>This is Color Component</Text>
    </View>)
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:50
    }
})

export default ColorBox