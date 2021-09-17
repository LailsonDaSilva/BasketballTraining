import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { StyleSheet, View, Text } from 'react-native';

import { Signin } from "../screens/Signin";
import { Training } from "../screens/Training";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../screens/Profile";
import { Home } from "../screens/Home";
import { theme } from "../global/styles/theme";


import IconHome from '../assets/home.svg';

{/* <Text style={{color: focused ?  '#1084F5' : theme.color.white}}></Text> */}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Signin: string;
      Training: string;
    }
  }
}
function TabBar(){
  return(
  <Tab.Navigator  screenOptions={{ headerShown:false, 
  tabBarShowLabel:false, 
  tabBarStyle: {
    position: 'absolute',
    bottom:25,
    left:20,
    right:20,
    backgroundColor:theme.color.black,
    borderRadius:10,
    height:80,
    ...styles.shadow

  },
  } } initialRouteName='Training'>
      <Tab.Group >
      <Tab.Screen  name='Home' component={Home} options={{ tabBarIcon:({focused})=>(
        <View>
          <IconHome  fill="#1084F5" />
          <Text style={{color: focused ?  '#1084F5' : theme.color.white}}>
            Home
          </Text>
        </View>
      ),}} />
       <Tab.Screen  name='Training' component={Training} />
       <Tab.Screen  name='Play' component={Training} />
       <Tab.Screen  name='Exercices' component={Training} />
       <Tab.Screen  name='Profile' component={Profile} />
       </Tab.Group>
      </Tab.Navigator>
      )
}

const AppRoutes: React.FC = () => (
    <Stack.Navigator    screenOptions={{ headerShown:false} } initialRouteName='Signin'>
      <Stack.Group >
       <Stack.Screen  name='Signin' component={Signin} />
       <Stack.Screen  name='Training' component={TabBar} />
       </Stack.Group>
      </Stack.Navigator>
     
)
export default AppRoutes;

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation: 5
  }

});