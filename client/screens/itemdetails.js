import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Details = () => {
  const route = useRoute();
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.overlay}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} src='' alt='kabins' />
        </View>

        <View style={styles.socialImpressions}>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="like2" size={24} color="black" />
            <Text style={styles.iconText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="dislike2" size={24} color="black" />
            <Text style={styles.iconText}>Dislike</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nameText}>Product Details: {id}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.starsContainer}>
            <Ionicons name="star" size={25} color="#FFA500" />
            <Ionicons name="star" size={25} color="#FFA500" />
            <Ionicons name="star-outline" size={25} color="#FFA500" />
          </View>

          <Text style={styles.contentText}>
            <FontAwesome name="product-hunt" size={24} color="black" /> Fullname: 
            <Text style={styles.innerText}> Product Name</Text>
          </Text>

          <Text style={styles.contentText}>
            <MaterialIcons name="sell" size={24} color="black" /> Seller: 
            <Text style={styles.innerText}> Seller Name</Text>
          </Text>

          <Text style={styles.contentText}>
            <Fontisto name="date" size={24} color="black" /> Posted on: 
            <Text style={styles.innerText}> Date Info</Text>
          </Text>

          <Text style={styles.contentText}>
            <MaterialIcons name="place" size={24} color="black" /> Region: 
            <Text style={styles.innerText}> Location Info</Text>
          </Text>

          <Text style={styles.contentText}>
            <FontAwesome6 name="contact-card" size={24} color="black" /> Contact: 
            <Text style={styles.innerText}> Contact Info</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  container: {
    height: 300,
    width: '90%',
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
  },
  socialImpressions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  nameText: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contentText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  innerText: {
    color: 'black',
    fontWeight: '600',
  },
  buyButton: {
    height: 50,
    width: 250,
    backgroundColor: '#FFA500',
    alignSelf: 'center',
    borderRadius: 25,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});
