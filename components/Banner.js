import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../constants/WindowSize";
import { textFont } from "../constants/Styles";

const Banner = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{"CampusLive"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4E2A84",
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  headerText: {
    fontFamily: textFont,
    fontSize: 32,
    padding: 10,
    color: "white",
    paddingLeft: 10,
  },
});

export default Banner;
