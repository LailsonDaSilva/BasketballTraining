import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Signin } from "../screens/Signin";
import { Training } from "../screens/Training";

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Signin: string;
      Training: string;
    }
  }
}

const AppRoutes: React.FC = () => (
    <Stack.Navigator    screenOptions={{ headerShown:false} } initialRouteName='Signin'>
      <Stack.Group >
       <Stack.Screen  name='Signin' component={Signin} />
       <Stack.Screen  name='Training' component={Training} />
       </Stack.Group>
      </Stack.Navigator>
)
export default AppRoutes;