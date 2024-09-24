import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,} from 'react-native';
import {useState} from "react";
import Loginscreen from './screens/loginscreen';
export default function App() {
  const [name ,setName] = useState("")
  return (
    <View >
     <Loginscreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"blue",
    fontFamily:"Poppins",
    fontWeight:800,
  },
  input:{
    height:"2rem",
    width:"10rem",
    border:"1px solid grey",
    paddingLeft:"8px",
  },
  div:{
    height:"10rem",
    width:"10rem",
    border:"1px solid grey",
    backgroundColor:"black",
    borderRadius:"8px",
    display:"flex",
    alignContent:"center",
    justifyContent:"center",
   
  },
  k:{
    textHeight:"15rem",
    fontWeight:1000,
    fontFamily:"Poppins",
    color:"white",
    textAlign:'center',
    maringTop:"40%",
  }

});
