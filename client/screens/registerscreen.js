import { View, Text, SafeAreaView,StyleSheet ,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react';
const Registerscreen = (props) => {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("");
  const[name,setName] = useState("");
  const [err,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const userdata = {
    name,
    email,
    password
  }
  async function registrationfunction(){
    // try{
    //   setLoading(true);
    //   const res = await axios.post("http://",{userdata})
    //   if(res.status === "success"){
    //     setLoading(false);
    //     props.navigation.navigate("Home")
    //   }
    //   else{
    //     setLoading(false);
    //     setError(err);
    //     console.log(err);
    //   }
    // }
    // catch(err){
    //   setLoading(false);
    //   console.log(err)
    console.log("Button clicked!!!")
    }
    return (
      <SafeAreaView >
      <View style={styles.container}>
        <Text style={{color:"black", letterSpacing:"5px",fontWeight:"800"}}> Sign in</Text>
        <View style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <TextInput style={styles.input} placeholder="Name"value ={name} onChange={(name)=> setName(name)}></TextInput>
        <TextInput style={styles.input} placeholder="Email" value ={email} onChange={(email)=> setEmail(email)}></TextInput>
        <TextInput style={styles.input} placeholder="Password" value ={password} onChange={(password)=> setPassword(password)}></TextInput>
        </View>
        <TouchableOpacity onPress={registrationfunction()} style={styles.buttn}>
          { 
            loading?(<Text style={styles.text}>Signin in ....</Text>):(<Text style={styles.text} >SignIn</Text>)
          }
          
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
 


export default Registerscreen;






const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontFamily:"Roboto",
    fontWeight:"800",
    color:'white',
  },
  buttn:{
    width:"10rem",
    height:"2rem",
    backgroundColor:"black",
    borderRadius:"8px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"1rem"
  },
  input:{
    width:"15rem",
    height:"2rem",
    border:"1px solid grey",
    borderRadius:"8px",
  },
})