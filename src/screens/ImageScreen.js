import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

const image1=require('../../assets/forest.jpg')
const image2=require('../../assets/beach.jpg')
const image3=require('../../assets/mountain.jpg')

    return (
    <View> 
   <ImageDetail title='Forest' imageSource={image1} imageScore={9}/>
   <ImageDetail title='Beach' imageSource={image2} imageScore={6}/>
   <ImageDetail title='Mountain' imageSource={image3} imageScore={8}/>
    </View>)
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:50
    }
})

export default ImageScreen