import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useState } from "react";
const Newpasswordsetup = ({navigation}) => {
    const [password,setPassword] = useState("")
    const [confirmpass,setConfirmpassword] = useState("")
  return (
    <SafeAreaView style={styles.container}>
    <View>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input}  placeholder = " password .." type="password" onPress={(text)=> setPassword(text)} >
        </TextInput>
        <Text style={styles.text} >Confirmpassword</Text>
        <TextInput style={styles.input}  placeholder = "Confirmpassword.." type="password" onPress={(text)=> setConfirmpassword(text)}></TextInput>
        <TouchableOpacity style={styles.bttn} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.text}> 
          Set 
        </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Newpasswordsetup

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
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
        paddingHorizontal:8
       },
       text:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
       }
})