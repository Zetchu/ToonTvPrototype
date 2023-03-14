import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./screens/Home.jsx";
import {
  Details,
  Menu,
  Profile,
  Settings,
  Search,
  Welcome,
  VideoScreen,
  About,
  Parents,
} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  VarelaRound_400Regular,
} from "@expo-google-fonts/varela-round";
import AppLoading from "expo-app-loading";

import Tabs from "./navigation/tabs";
import RenderCrtici from "./components/Home/RenderCrtici.jsx";

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Parents" component={Parents} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
