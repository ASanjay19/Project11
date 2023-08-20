import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/native-stack'; 
//import {NavigationContainer} from "@react-navigation/native";

// import mainscreen from './foodscreen/main';
// import BiryaniScreen from "./foodscreen/Biryani";
import HomeScreen from './screens/myhome';
import loginScreen from './screens/mylogin';
import OtpScreen from './screens/otp';
const Stack = createNativeStackNavigator();
const App =()=>{
  return(
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
           name="Home"
           component={HomeScreen}
           //options={{ title: 'Login Screen' }}   
           options={{headerShown:false}}     
         />
         <Stack.Screen
           name="Login"
           component={loginScreen}
           //options={{ title: 'Login Screen' }}   
           options={{headerShown:false}}     
         />
         <Stack.Screen
           name="OTP"
           component={OtpScreen}
           //options={{ title: 'Login Screen' }}   
           options={{headerShown:false}}     
         />
      </Stack.Navigator>
     </NavigationContainer>
  );
 };
export default App;