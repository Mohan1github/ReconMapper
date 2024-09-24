import { View, Text ,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {Link} from "react";
import {useState , useEffect} from "react";
const Loginscreen = ({navigation}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const loginfunction = async()=>{
      try{
          setLoading((prev)=> !prev)
          const login = await axios.post("",{value,password})
          if(login.success == true){
            navigation.navigate("Home")
          }
          else{
            setError(login.res.error);
          }
      }
      catch(err){
        console.log(err);
      }
  }
  // useEffect(()=>{
  //   loginfunction()
  // },[value,password])
  return (
    <View>
      <Text>Loginscreen</Text>
      <View style={styles.formview}>
        <Text> Name or email</Text>
          <TextInput placeholder="Email or username" value = {email} onChange={(e)=>setEmail(e.target.value)}>
          </TextInput>
          <Text> password</Text>
          <TextInput placeholder="password" value = {password} onChange={(e)=>setPassword(e.target.value)}>
          </TextInput>
           <a to ="Forgotpassword"> forgotpassword?</a> 
         { error? <View>
          <Text styles={{color:"red"}}>
            {error}
          </Text>
         </View>:""}
          <TouchableOpacity onPress={()=>loginfunction()} style={styles.buttonstyle}>Login</TouchableOpacity>
      </View>
    </View>
  )
}

export default Loginscreen

const styles = StyleSheet.create({
    constainer:{
      flex:2,
      backgroundColor:"white",
    },
    formview:{
      display:"flex",
      flexDirection:"column",
      gap:"5px",
      height:"10rem",
      alignItems:"center",
      justifyContent:"center",
    },
    buttonstyle:{
      width:"10rem",
      height:"2rem",
      backgroundColor:"black",
      color:"white",
      borderRadius:"8px",
      border:"none",
      outline:"none",
      display:"flex",
      alignItems:'center',
    justifyContent:'center' ,
     
  },
})