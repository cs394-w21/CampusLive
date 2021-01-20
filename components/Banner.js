import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { windowWidth } from "../constants/WindowSize";
import { textFont } from "../constants/Styles";

const Banner = ({ navigation }) => {
  const myEventsClick = () => {
    navigation.navigate("MyEventsScreen");
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{"Northwestern Events"}</Text>
      <View style={styles.headerButtons}>
        <TouchableOpacity style={styles.Button} onPress={myEventsClick}>
          <Text style={styles.ButtonText}>My Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Feed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4E2A84",
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: textFont,
    fontSize: 32,
    padding: 10,
    color: "white",
    paddingLeft: 10,
  },
  Button: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 120,
    maxWidth: 120,
    backgroundColor: "#bb99ff",
  },
  headerButtons: {
    paddingRight: 10,
    flexDirection: "row",
  },
  ButtonText: {
    fontFamily: textFont,
    fontSize: 18,
    color: "white",
  },
});

export default Banner;
