import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextLink from "react-native-text-link";
// import {Ionicons} from '@expo/vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAvoidingView } from "react-native";
const Loginscreen = ({ navigation }) => {
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
          ></TextInput>
          <Text>password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password.."
            autocomplete={false}
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
