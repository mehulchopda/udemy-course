import React, {useReducer} from 'react'
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;


const reducer = ( state, action) => {        
    switch(action.type){
        case 'change_red':
                return state.red + action.amount > 255 || state.red + action.amount <0 
                    ? state
                : {...state, red: state.red + action.amount }
        case 'change_green':
                return state.green + action.amount > 255 || state.green + action.amount <0 
                    ? state
                : {...state, green: state.green + action.amount }
        case 'change_blue':
                return state.blue + action.amount > 255 || state.blue + action.amount <0
                    ? state
                :{...state, blue: state.blue + action.amount }
        default:
            return state
    }
}

const SquareScreenWithReducer = () => {


    const [state, dispatch] = useReducer(reducer, {red: 0, green:0, blue:0}) 

    const { red, green, blue} = state

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
        onIncrease={()=> dispatch({type:'change_red', amount:COLOR_INCREMENT})}
        onDecrease={()=> dispatch({type:'change_red', amount: -1 * COLOR_INCREMENT})}
        />
        <ColorCounter
         color="GREEN"
         onIncrease={()=> dispatch({type:'change_green', amount:COLOR_INCREMENT})}
         onDecrease={()=> dispatch({type:'change_green', amount: -1 * COLOR_INCREMENT})}
         />
        <ColorCounter 
        color="BLUE"
        onIncrease={()=> dispatch({type:'change_blue', amount:COLOR_INCREMENT})}
        onDecrease={()=>  dispatch({type:'change_blue', amount: -1 * COLOR_INCREMENT})}
        />
        <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>)
}



const styles=StyleSheet.create({
    
})

export default SquareScreenWithReducer