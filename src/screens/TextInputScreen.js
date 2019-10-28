import React, {useState} from 'react'
import { TextInput, StyleSheet, View, Text} from 'react-native'

const TextInputScreen = () => {
    const [currenText, setCurretText]= useState('')
    const [error, setError]= useState('')
    return (
    <View>
    <Text>Enter Name</Text>

    <TextInput
     style={styles.input}
     autoCapitalize="none"
     autoCorrect={false}
     value={currenText}
     onChangeText={(newText)=> setCurretText(newText)}
     />
     <Text>{currenText}</Text>
     { currenText.length < 5 && currenText.length > 0 ?<Text style={styles.error}>Must be greater than 5 chars</Text> : null }
    </View>)
}

const styles=StyleSheet.create({
    input:{
        fontSize:18,
        margin:15,
        borderColor:'black',
        borderWidth:1
    },
    error:{
        fontSize:13,
        color:'red'
    }

})

export default TextInputScreen