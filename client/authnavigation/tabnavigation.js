import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/homescreen';
import Profile from "../screens/profile"
import Yourbids from "../screens/yourbids"
import Createbid from '../screens/createbid';
import Blogsandnews from '../screens/blogsandnews';
import { View ,Text,Image} from 'react-native';
const Tab = createBottomTabNavigator();
const Tabnavigation = ()=>{
    return (
   
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"orange"
      }}>
        <Tab.Screen name="Home" component={Homescreen} options={{
          tabBarIcon:({color , size})=>(
            <Image source={require("../assets/home.png")} style={{height:35,width:35}}></Image>
          )
        } }/>
        <Tab.Screen name="Yourbids" component={Yourbids} options={{
          tabBarIcon:({color , size})=>(
            <Image source={require("../assets/home.png")} style={{height:35,width:35}}></Image>
          )
        } }/>
        <Tab.Screen name="Createbid" component={Createbid} options={{
          tabBarIcon:({color , size})=>(
            <Image source={require("../assets/create.jpg")} style={{height:35,width:35}}></Image>
          )
        } }/>
        <Tab.Screen name="Blogandnews" component={Blogsandnews}options={{
          tabBarIcon:({color , size})=>(
            <Image source={require("../assets/person.png")} style={{height:35,width:35}}></Image>
          )
        } } />
        <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarIcon:({color , size})=>(
            <Image source={require("../assets/person.png")} style={{height:35,width:35}}></Image>
          )
        } }/>
      </Tab.Navigator>
   
    )
}
export default Tabnavigation;