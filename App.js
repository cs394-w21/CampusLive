import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { firebase } from "./utils/firebase";
import EventSelectorScreen from "./screens/EventSelectorScreen";
import EventEndScreen from "./screens/EventEndScreen";
import UserContext from "./utils/UserContext";
import EventsContext from "./utils/EventsContext";
import { setStatusBarHidden } from "expo-status-bar";

const Stack = createStackNavigator();
const adminUID = "admin";

export default function App() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState();

  useEffect(() => {
    const db = firebase.database().ref("events");
    const handleData = (snap) => {
      if (snap.val()) setEvents(snap.val());
    };
    db.on("value", handleData, (error) => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  useEffect(() => {
    const db = firebase.database().ref("users").child(adminUID);
    const handleData = (snap) => {
      setUser({ uid: adminUID, ...snap.val() });
      console.log(snap.val());
    };
    db.on("value", handleData, (error) => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  });

  return (
    <UserContext.Provider value={user}>
      <EventsContext.Provider value={{ events, setEvents }}>
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
      </EventsContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
