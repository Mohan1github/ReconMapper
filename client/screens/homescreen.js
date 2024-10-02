import { StyleSheet, Text, TouchableHighlight, View,TextInput, FlatList, TouchableOpacity,Link } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const data = [
  {id:1,name:"kabinys",beautilevel:"infinity"},
  {id:2,name:"kabinys",beautilevel:"infinity"},
  {id:3,name:"kabinys",beautilevel:"infinity"},
  {id:4,name:"kabinys",beautilevel:"infinity"},
  {id:5,name:"kabinys",beautilevel:"infinity"},
  {id:6,name:"kabinys",beautilevel:"infinity"},
  {id:7,name:"kabinys",beautilevel:"infinity"},
  {id:8,name:"kabinys",beautilevel:"infinity"},
  {id:9,name:"kabinys",beautilevel:"infinity"},
  {id:10,name:"kabinys",beautilevel:"infinity"},
  {id:11,name:"kabinys",beautilevel:"infinity"},
  {id:12,name:"kabinys",beautilevel:"infinity"},
  {id:13,name:"kabinys",beautilevel:"infinity"},
  {id:14,name:"kabinys",beautilevel:"infinity"},
  {id:15,name:"kabinys",beautilevel:"infinity"}

]
const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView >
      <ScrollView  >
        <View >
          <TextInput placeholder="search here...." style={styles.input}></TextInput>
          <Ionicons name="search-outline" size={25}  style={styles.search}/>
        </View>
        <View style={styles.main}>

        </View>
        <Text style={styles.text}>Famous</Text>
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.scroll}>
          <View style={styles.hor}>
            {

            //   data.map((item)=>{
            //     return(
            //     <View key={item.id}>
            //       <Text>{item.name}</Text>
            //       <Text>{item.beautilevel}</Text>
            //     </View>
            //   )
            // })
            }  
            <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
            <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          </TouchableOpacity>
           
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          <View style={styles.horizontal}>
              <Text>Kabinya</Text>
          </View>
          
      </View>
        </ScrollView>
        <Text style={styles.text}>Famous</Text>
       
        <Text style={styles.text}>Famous</Text>
       
        <ScrollView horizontal={true}>
          <View style={styles.hor}>
            {
              data.map((k)=>{
                return(
                  <View style={styles.horizontal} key={k.id}>
                  <Text>Kabinya</Text>
                  <Text>{k.name}</Text>
                  <Text>{k.beautilevel}</Text>
              </View>
                )
              })
            }
          </View>
        </ScrollView>
        
   </ScrollView>
      </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white"
  },
  input:{
    backgroundColor:"white",
    marginTop:20,
    height:50,
    borderRadius:8,
    width:"98%",
    alignSelf:"center",
    paddingLeft:8
  },
  search:{
    position:"absolute",
    left:340,
    top:33
  },
  main:{
    height:200,
    backgroundColor:"white",
    marginTop:8,
    width:"97%",
    alignSelf:"center",
    borderRadius:8,
    
  },
  text:{
    fontSize:20,
    fonrWeight:"bold",
    marginTop:5,      
    marginLeft:3
  },
  horizontal:{
    backgroundColor:"white",
    height:175,
    width:175,
    borderRadius:8,
    marginLeft:10
  },
  hor:{ 
    display:'flex',
    flexDirection:"row"
  },
  scroll:{
    scrollBehavior:"smooth"
  }
})