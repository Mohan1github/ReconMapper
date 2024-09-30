import { View ,Text ,StyleSheet, TextInput, TouchableOpacity,StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextLink from "react-native-text-link"


const Forgotpassword = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View >
   
      <Text style={{color:"black",fontSize:30,marginTop:100,fontWeight:"bold",textAlign:"center"}}>
        Forgotpassword?
      </Text>
      <Text  style={{marginTop:8,textAlign:"center",color:"grey",fontSize:15,marginBottom:8}}>Follow the weasy steps to set your new password!</Text>
      <Text style={{fontWeight:"bold",marginLeft:22}}>Email..</Text>
      <TextInput style={styles.input} placeholder="Email" autocomplete = {false}></TextInput>
      <TouchableOpacity style={styles.bttn}>
        <Text style={styles.text}> 
          Send
        </Text>
      </TouchableOpacity>
      <View style={{display:"flex",flexDirection:"row",gap:5,marginTop:10,alignSelf:"center"}}>
      {/* <Text>Don't have account yet?</Text>
      <Text style={{color:"blue",fontSize:15,fontWeight:"bold"}} onPress={()=>navigation.navigate("Register")}></Text> */}
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default Forgotpassword

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white",
      // justifyContent:"center",
      alignItems:"center",
     
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
    text:{
      fontSize:20,
      fontWeight:"bold",
      color:"white",
     },
     input:{
      width:300,
      height:50,
      borderColor:"grey",
      borderWidth:1,
      marginBottom:10,
      borderRadius:8,
      paddingHorizontal:8,
      alignSelf:"center"
     }
  })
  