import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { firebase } from "./utils/firebase";
import EventSelectorScreen from "./screens/EventSelectorScreen";
import EventEndScreen from "./screens/EventEndScreen";
import { windowWidth } from "./constants/WindowSize";
import UserContext from "./UserContext";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="EventSelectorScreen"
            component={EventSelectorScreen}
            options={{ title: "Event Selectors" }}
          />
          <Stack.Screen
            name="EventEndScreen"
            component={EventEndScreen}
            options={{ title: "Event End" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4E2A84",
    width: windowWidth,
  },
  headerText: {
    fontFamily: "campton",
    fontSize: 32,
    padding: 10,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
});
