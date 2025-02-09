import { View ,Text ,StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextLink from "react-native-text-link"
import Loginscreen from "./screens/loginscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registerscreen from "./screens/registerscreen";
import Forgotpassword from "./screens/forgotpassword";
import Tabnavigation from "./authnavigation/tabnavigation";
import Newpasswordsetup from "./screens/newpasswordsetup";
import Details from "./screens/itemdetails";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
export default function App() {
  const asyncStorage = useAsyncStorage();
  const Stack = createStackNavigator();
  // const user = asyncStorage.getItem("currentUser")
  // const user = asyncStorage.getItem("currentUser")
  
//  const user = asyncStorage.getItem('currentUser');
  const currentuser ="kabinya";
  return(
    <NavigationContainer >
        <Stack.Navigator >
          {
            currentuser === undefined?<Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}}/> :(
              <Stack.Screen name="Tabnavigation" component={Tabnavigation} options={{headerShown:false}}/>
        )}
        <Stack.Screen name ="Register" component={Registerscreen} options={{headerShown:false}}/>
        <Stack.Screen name ="Forgotpassword" component={Forgotpassword}  />
       
        <Stack.Screen name = "Newpasswordsetup" component = {Newpasswordsetup} option={{headerShown:false}}/>
        <Stack.Screen name = "Details" component = {Details} option={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  )
} 

