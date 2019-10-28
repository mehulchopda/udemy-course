import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
  <Text style={styles.text}>Welcome to react native</Text>
    <Button 
    title='Go to Component Demo' 
    onPress={()=>navigation.navigate('Components')}
    />
       <Button 
    title='Go to List Demo' 
    onPress={()=>navigation.navigate('List')}
    />
      <Button 
    title='Go to Image Demo' 
    onPress={()=>navigation.navigate('Image')}
    />
    <Button 
    title='Go to Counter Screen' 
    onPress={()=>navigation.navigate('Counter')}
    />
    <Button 
    title='Go to Color Screen' 
    onPress={()=>navigation.navigate('Color')}
    />
    <Button 
    title='Go to Square Screen' 
    onPress={()=>navigation.navigate('Sqaure')}
    />
    <Button 
    title='Go to Square Screen With Reducer' 
    onPress={()=>navigation.navigate('SqaureWithReducer')}
    />
        <Button 
    title='Go to Text Screen' 
    onPress={()=>navigation.navigate('TextInput')}
    />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
