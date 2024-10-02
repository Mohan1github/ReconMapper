import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useRoute} from "@expo-router"
const Details = () => {
  const route = useRoute();
  const {id} = route.params.id
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})