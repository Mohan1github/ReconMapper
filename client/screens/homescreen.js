import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Homescreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
           <Text> Home</Text>
        </View>
        </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
  
})