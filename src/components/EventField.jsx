import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { textFont } from "../constants/Styles";

// TODO: Anchor icons so it doesn't move when swiping
const EventField = ({ text, icon, textStyle }) => (
  <View style={styles.fieldContainer}>
    <Entypo name={icon} size={20} color="black" style={styles.icon} />
    <Text style={textStyle}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  fieldContainer: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignContent: "center"
  },
  icon: {
    marginRight: 10,
  },
});

export default EventField;
