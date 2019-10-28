import React from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

const ImageDetail = ({imageSource,title,imageScore}) => {
    return (
    <View>
    <Image source={imageSource}/>
    <Text>{title}</Text>
    <Text>Image-Score {imageScore}</Text>
    
    </View>)
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:50
    }
})

export default ImageDetail