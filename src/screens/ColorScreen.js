import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'
import ColorBox from '../components/ColorBox'

const ColorScreen = () => {
    const [colors, setColors]=useState([])

    return (
    <View>
        <Button title="Add Color" onPress={()=>{
            setColors([...colors,randomRgb()])
        }}/>
        <FlatList keyExtractor={(item)=> item} data={colors} renderItem={({ item })=>{
            return  <ColorBox boxBgColor={item}/>
        }}/>
    </View>)
}

//generate random color
const randomRgb = () => {
    const red= Math.floor(Math.random()*256)
    const green= Math.floor(Math.random()*256)
    const blue= Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:50
    }
})

export default ColorScreen