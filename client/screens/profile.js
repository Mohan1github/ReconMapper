import { View, Text ,SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
const Profile = () => {
  return (
    <SafeAreaView>
   <View style={styles.container}>
    <Text style={{marginLeft:"5rem",marginTop:"5rem",color:"black"}}>
        Kabinya 
    </Text>
   </View>
   </SafeAreaView>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})

