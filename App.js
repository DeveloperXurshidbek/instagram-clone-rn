import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./navigation/Tabs";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ paddingTop: 50, height: "100%" }}>
        <StatusBar backgroundColor="white" style="auto" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={Tabs} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
