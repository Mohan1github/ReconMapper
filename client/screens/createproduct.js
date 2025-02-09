import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
// import * as ImagePicker from "expo-image-picker";

const ProductDetailsPage = () => {
  const [productName, setProductName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [region, setRegion] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [photo, setPhoto] = useState(null);

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setPhoto(result.assets[0].uri);
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Product Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Seller Name"
        value={sellerName}
        onChangeText={setSellerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Region of Selling"
        value={region}
        onChangeText={setRegion}
      />
      <TextInput
        style={styles.input}
        placeholder="Date Posted (YYYY-MM-DD)"
        value={datePosted}
        onChangeText={setDatePosted}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Details"
        value={contactDetails}
        onChangeText={setContactDetails}
        keyboardType="phone-pad"
      />

      <View style={styles.photoUploader}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>Upload Photo</Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={styles.uploadedImage} />}
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Ensure all product details are accurate before submitting. This information will be visible to potential buyers.</Text>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    fontSize: 16,
  },
  photoUploader: {
    marginTop: 20,
    alignItems: "center",
  },
  uploadButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  uploadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  uploadedImage: {
    marginTop: 15,
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  infoBox: {
    backgroundColor: "#FFE4C4",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  infoText: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ProductDetailsPage;
