import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import axios from "axios";

// Get the device screen width
const screenWidth = Dimensions.get("window").width;

const Registerscreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signupFunction = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://192.168.232.19:3000/api/v1/auth/register", {
        name,
        email,
        password,
        number,
      });

      if (response.success === true) {
        setLoading(false);
        console.log("User signed in successfully");
      } else {
        setLoading(false);
        console.log("Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log("Error", err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView>
        <Image style={styles.imgkabins} source={require("../assets/adduser.png")} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoComplete="off"
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            autoComplete="off"
            onChangeText={(text) => setPassword(text)}
          />

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            autoComplete="off"
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.label}>Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your number"
            keyboardType="numeric"
            autoComplete="off"
            onChangeText={(text) => setNumber(text)}
          />

          <TouchableOpacity style={styles.bttn} onPress={signupFunction} disabled={loading}>
            <Text style={styles.text}>{loading ? "Signing up..." : "Sign Up"}</Text>
          </TouchableOpacity>

          <View style={styles.loginRedirect}>
            <Text>Already have an account?</Text>
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Registerscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  imgkabins: {
    alignSelf: "center",
    marginTop: 10,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FF9800",
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
  },
  formContainer: {
    width: screenWidth * 0.9, // 90% of the screen width
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    width: "100%", // Full width of the form container
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  bttn: {
    height: 50,
    width: "100%",
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  loginRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  loginLink: {
    marginLeft: 5,
    color: "#007BFF",
    fontWeight: "bold",
  },
});
