import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useState } from "react";
const Newpasswordsetup = ({navigation}) => {
    const [password,setPassword] = useState("")
    const [confirmpass,setConfirmpassword] = useState("")
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:20,textAlign:"center",color:"grey"}}>
          Set your new strong password for ypur account safety
        </Text>
      </View>
      <View style={{alignSelf:"center",marginTop:20}}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input}  placeholder = " password .." type="password" onPress={(text)=> setPassword(text)} >
        </TextInput>
        <Text style={styles.text} >Confirmpassword</Text>
        <TextInput style={styles.input}  placeholder = "Confirmpassword.." type="password" onPress={(text)=> setConfirmpassword(text)}></TextInput>
        <TouchableOpacity style={styles.bttn} onPress={()=>navigation.navigate("")}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}> 
          Set 
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Newpasswordsetup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    bttn:{
        height:50,
        width:200,
        backgroundColor:"orange",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        alignSelf:'center',
        marginTop:8
      },
      input:{
        width:300,
        height:50,
        borderColor:"grey",
        borderWidth:1,
        marginBottom:10,
        borderRadius:8,
        paddingHorizontal:8,
       
       },
       text:{
        fontSize:15,
        fontWeight:"bold",
        color:"black",
       }
})