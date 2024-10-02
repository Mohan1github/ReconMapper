import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Blogsandnews = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>Blogsandnews</Text>
    </View>
    </SafeAreaView>
  )
}

export default Blogsandnews;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:50,
    fontWeight:"bold"
  }
})