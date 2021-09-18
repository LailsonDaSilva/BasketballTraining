import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { StyleSheet, View, Text, TouchableOpacity, ButtonProps } from 'react-native';

import { Signin } from "../screens/Signin";
import { Training } from "../screens/Training";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../screens/Profile";
import { Home } from "../screens/Home";
import { theme } from "../global/styles/theme";


import IconHome from '../assets/home.svg';
import IconTraining from '../assets/grid.svg';
import IconExercice from '../assets/Exercice.svg';
import IconProfile from '../assets/profile.svg';
import IconPlay from '../assets/play.svg';
{/* <Text style={{color: focused ?  '#e32f45' : theme.color.white}}></Text> */}

type tabButtonProps = ButtonProps &{}

const CustomTabBarButton = ({children, onPress}:tabButtonProps) => (

  <TouchableOpacity style={{
    top: -30,
    justifyContent:'center',
    alignItems: 'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width:70,
      height:70,
      borderRadius:35,
      backgroundColor: '#e32f45'
    }}>
    {children}
    </View>
  </TouchableOpacity>

);

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
    paddingBottom:16,
    ...styles.shadow

  },
  } } initialRouteName='Training'>
      <Tab.Group >
      <Tab.Screen  name='Home' component={Home} options={{ tabBarIcon:({focused})=>(
        <View style={styles.iconTabBar}>
          <IconHome  />
          <Text style={{color: focused ?  '#e32f45' : theme.color.white}}>
            Home
          </Text>
        </View>
      ),}} />
       <Tab.Screen  name='Training' component={Training} options={{ tabBarIcon:({focused})=>(
        <View style={styles.iconTabBar}>
          <IconTraining  />
          <Text style={{color: focused ?  '#e32f45' : theme.color.white}}>
            Training
          </Text>
        </View>
      ),}}  />
       <Tab.Screen  name='Play' component={Training}  options={{ 
         tabBarIcon:()=>(<IconPlay style={{width:20, height:20}}/>),
         tabBarButton: (props) =>(
            <CustomTabBarButton {...props}/>
         )
         
         }} />
       <Tab.Screen  name='Exercices' component={Training} options={{ tabBarIcon:({focused})=>(
        <View style={styles.iconTabBar}>
          <IconExercice style={{width:20, height:20}}/>
          <Text style={{color: focused ?  '#e32f45' : theme.color.white}}>
          Exercices
          </Text>
        </View>
      ),}}  />
       <Tab.Screen  name='Profile' component={Profile} options={{ tabBarIcon:({focused})=>(
        <View style={styles.iconTabBar}>
          <IconProfile  fill="#e32f45" />
          <Text style={{color: focused ?  '#e32f45' : theme.color.white}}>
          Profile
          </Text>
        </View>
      ),}}  />
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
  },
  iconTabBar:{
    alignItems: 'center',
    justifyContent:'center',
    top: 10,
  }

});