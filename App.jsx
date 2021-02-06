import React, { useState, useEffect } from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import firebase from "./src/utils/firebase";
import UserContext from "./src/utils/UserContext";
import EventsContext from "./src/utils/EventsContext";
import AccountScreen from "./src/screens/AccountScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import CreateEventScreen from "./src/screens/CreateEventScreen";
import DisplayEventScreen from "./src/screens/DisplayEventScreen";
import SelectEventScreen from "./src/screens/SelectEventScreen";
import { formatDateToString } from "./src/utils/Dates";

const Tab = createBottomTabNavigator();
enableScreens();

const adminUID = "admin";
const MILLISECOND_OFFSET = 1000;

export default function App() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState();

  useEffect(() => {
    const db = firebase.database().ref("users").child(adminUID);
    const handleData = (snap) => {
      setUser({ uid: adminUID, ...snap.val() });
    };
    // eslint-disable-next-line no-alert
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

  useEffect(() => {
    if (user && user.uid) {
      const db = firebase.database().ref("events");
      const handleData = (snap) => {
        const eventsDb = snap.val();
        if (eventsDb) {
          Object.entries(user.eventChoice).forEach(([eventId, choice]) => {
            eventsDb[eventId].choice = choice;
          });
          let date;
          Object.keys(eventsDb).forEach((eventId) => {
            const event = eventsDb[eventId];

            date = new Date(event.startDateTime.seconds * MILLISECOND_OFFSET);
            eventsDb[eventId].startDateTime = date;
            eventsDb[eventId].startDateString = formatDateToString(date);

            // TODO handle if no end date
            date = new Date(event.endDateTime.seconds * MILLISECOND_OFFSET);
            eventsDb[eventId].endDateTime = date;
            eventsDb[eventId].endDateString = formatDateToString(date);
          });
          setEvents(eventsDb);
        }
      };
      // eslint-disable-next-line no-console
      db.on("value", handleData, (error) => console.log(error));
      return () => {
        db.off("value", handleData);
      };
    }
    setEvents(null);
    return undefined;
  }, [user, auth]);

  return (
    <UserContext.Provider value={user}>
      <EventsContext.Provider value={{ events, setEvents }}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{ showIcon: true }}
            initialRouteName="SelectEventScreen"
          >
            <Tab.Screen
              name="SelectEventScreen"
              component={SelectEventScreen}
              options={{
                title: "Feed",
                tabBarIcon: () => (
                  <Entypo name="images" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="DisplayEventScreen"
              component={DisplayEventScreen}
              options={{
                title: "My Events",
                tabBarIcon: () => (
                  <Entypo name="calendar" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="CalendarScreen"
              component={CalendarScreen}
              options={{
                title: "Calendar",
                tabBarIcon: () => (
                  <Entypo name="calendar" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="CreateEventScreen"
              component={CreateEventScreen}
              options={{
                title: "New Event",
                tabBarIcon: () => (
                  <Entypo name="plus" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="AccountScreen"
              component={AccountScreen}
              options={{
                title: "Account",
                tabBarIcon: () => (
                  <Entypo name="user" size={20} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </EventsContext.Provider>
    </UserContext.Provider>
  );
}
