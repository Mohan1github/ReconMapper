import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import axios from "axios"; 

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { getItem, removeItem } = useAsyncStorage("currentUser"); 
  const asyncStorage = useAsyncStorage()

  const logout = async () => {
    try {
      setLoading(false);
      const response = await axios.get("http://192.168.232.19:3000/api/v1/auth/logout");

      if (response.status === 200) {
        await removeItem(); 
        console.log("Logout successful");
      } else {
        console.log("Something went wrong during logout");
      }
    } catch (err) {
      console.error("Logout error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const testlogout = async ()=>{
    try{
        console.log("Logout button pressed")
        await asyncStorage.removeItem("currentuser")

    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }} 
          style={styles.profilePicture}
        />

        <Text style={styles.userName}>Kabinya</Text>
        <Text style={styles.userEmail}>kabins@gmail.com</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={testlogout} disabled={loading}>
          <Text style={styles.logoutButtonText}>
            {loading ? "Logging out..." : "Logout"}
          </Text>
        </TouchableOpacity>

        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="orange" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: "#ccc",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  logoutButton: {
    width: "80%",
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  loaderContainer: {
    marginTop: 20,
  },
});
