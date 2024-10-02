import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons";
import axios from "axios";
import { KeyboardAvoidingView } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
const Loginscreen = ({ navigation }) => {
    const asyncStorage = useAsyncStorage()
      const [email,setEmail] = useState("")
      const[password,setPassword] = useState("")
      const[loading,setLoading] = useState(false)
      const[error,setError] = useState(null)
      const loginfunction = async()=>{
        setLoading(true)
        try{
          console.log(email)
          console.log(password)
          const user = await axios.post("http://192.168.232.19:3000/api/v1/auth/login",{email,password})
          // if(res){ 
          //   asyncStorage.setItem("currentUser",user)
          //   setLoading(false)
          // }
        }
        catch(err) 
        {
          setLoading(false)
          setError(err)
        }
      }



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
      <Image style = {styles.imgkabins} source={require("../assets/person.png")} ></Image>
        <View style={{marginTop:-90}}>
          
          <Text
            style={{
              color: "black",
              fontSize: 30,
              marginTop: 100,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Login
          </Text>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email.."
            autocomplete={false}
            onChangeText={(text)=>setEmail(text)}
          ></TextInput>
          <Text>password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password.."
            autocomplete={false}
            onChangeText={(text)=>setPassword(text)}
          ></TextInput>
          <Text
            style={{ color: "blue", marginLeft: 185 }}
            onPress={() => navigation.navigate("Forgotpassword")}
          >
            forgotpassword?
          </Text>
          <TouchableOpacity
            style={styles.bttn}
            onPress={() => navigation.navigate("Tabnavigation")}
            // onPress={()=>loginfunction()}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            <Text>Don't have account yet?</Text>
            <Text
              style={{ color: "blue", fontSize: 15, fontWeight: "bold" }}
              onPress={() => navigation.navigate("Register")}
            >
              Create new!
            </Text>
            {/* <Ionicons name="checkmark-circle" size={40} color="green"></Ionicons> */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent:"center",
    alignItems: "center",
  },
  bttn: {
    height: 50,
    width: 200,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: 300,
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  imgkabins:{
    alignSelf:"center",
    marginTop:30,
    height:150,
    width:150
  }
});
