import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons";
import axios from "axios";
import { KeyboardAvoidingView } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

// Get screen width
const { width } = Dimensions.get("window");

const Loginscreen = ({ navigation }) => {
  const asyncStorage = useAsyncStorage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginFunction = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://192.168.232.19:3000/api/v1/auth/login", {
        email,
        password
      });

      if (response.status == 200) {
        setLoading(false);
        asyncStorage.setItem("currentuser", response.userid);
        console.log("Login successful");
      } else {
        setLoading(false);
        console.log("Login failed");
      }
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log("Error", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Image style={styles.imgkabins} source={require("../assets/person.png")} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email.."
            autoComplete="off"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password.."
            autoComplete="off"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />

          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("Forgotpassword")}
          >
            Forgot password?
          </Text>

          <TouchableOpacity
            style={styles.bttn}
            onPress={loginFunction}
            disabled={loading}
          >
            <Text style={styles.text}>{loading ? "Logging in..." : "Login"}</Text>
          </TouchableOpacity>

          <View style={styles.registerLinkContainer}>
            <Text>Don't have an account yet?</Text>
            <Text
              style={styles.registerLink}
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
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: width * 0.85, 
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    width: "100%", 
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  forgotPassword: {
    color: "royalblue",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  bttn: {
    height: 50,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    width: "100%", 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  imgkabins: {
    alignSelf: "center",
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#FF9800",
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
  },
  registerLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  registerLink: {
    color: "royalblue",
    fontWeight: "bold",
    fontSize: 16,
  },
});
