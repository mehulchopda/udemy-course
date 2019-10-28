import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;


const SquareScreen = () => {
    const [red, setRed]=useState(0)
    const [green, setGreen]=useState(0)
    const [blue,setBlue]=useState(0)
    console.log(`rgb(${red},${blue},${green})`)

    const setColor  = (color,change) => {
        switch(color){
            case 'red':{
                red + change > 255 || red + change < 0 ? null : setRed(red+change)
                return
            }
            case 'green':{
                green + change > 255 || green + change < 0 ? null : setGreen(green+change)
            }
            case 'blue':{
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change)
            }
            default:
                return
        }
    }

    return (
    <View>
        <ColorCounter
        color="RED" 
        onIncrease={()=> {
            setColor('red',COLOR_INCREMENT)
        }}
        onDecrease={()=> setColor('red',-1 * COLOR_INCREMENT)}
        />
        <ColorCounter
         color="GREEN"
         onIncrease={()=> setColor('green',COLOR_INCREMENT)}
         onDecrease={()=> setColor('green',-1 * COLOR_INCREMENT)}
         />
        <ColorCounter 
        color="BLUE"
        onIncrease={()=> setColor('blue',COLOR_INCREMENT)}
        onDecrease={()=> setColor('blue',-1 * COLOR_INCREMENT)}
        />
        <View style={{height:100,width:100,backgroundColor:`rgb(${red},${blue},${green})`}}></View>
    </View>)
}



const styles=StyleSheet.create({
    
})

export default SquareScreen