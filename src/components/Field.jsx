import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { textFont } from "../constants/Styles";
import { windowHeight } from "../constants/WindowSize";

const Field = ({ value }) => (
  <View style={styles.fields}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  fields: {
    padding: 10,
    textAlign: "center",
    height: windowHeight*0.3,
  },
  text: {
    fontFamily: textFont,
  },
});

export default Field;
