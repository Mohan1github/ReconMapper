import { View ,Text ,StyleSheet, TextInput, TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextLink from "react-native-text-link"
import Loginscreen from "./loginscreen";
import { KeyboardAvoidingView } from "react-native";

const Registerscreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
    <SafeAreaView >
      <Image  style={styles.imgkabins} source={require("../assets/adduser.png")}/>
    <View  style={{marginTop:-120}}>
      <Text style={{color:"black",fontSize:30,marginTop:100,fontWeight:"bold",textAlign:"center"}}>
        Sign up
      </Text>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Email" autocomplete = {false}></TextInput>
      <Text>password</Text>
      <TextInput style={styles.input} placeholder="Password" autocomplete = {false}></TextInput>
      <Text>Name</Text>
      <TextInput style={styles.input} placeholder="Name" autocomplete = {false}></TextInput>
      <Text>Number</Text>
      <TextInput style={styles.input} placeholder="Number"  type="number"autocomplete = {false}></TextInput>
     
      <TouchableOpacity style={styles.bttn}>
        <Text style={styles.text}> 
          Sign up
        </Text>
      </TouchableOpacity>
      <View style={{display:"flex",flexDirection:"row",gap:5,marginTop:10,alignSelf:"center"}}>
      <Text>Already have an account ?</Text>
      <Text style={{color:"blue",fontSize:15,fontWeight:"bold"}} onPress={()=>navigation.navigate("Login")}>Login</Text>
      </View>
      
    </View>
   
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Registerscreen

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
    paddingHorizontal:8
   },
   imgkabins:{
    alignSelf:"center",
    marginTop:10

  }
})
