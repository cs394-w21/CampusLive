import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { textFont } from "../constants/Styles";

const Field = ({ value }) => {
  return (
    <View style={styles.fields}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fields: {
    padding: 10,
  },
  text: {
    fontFamily: textFont,
  },
});

export default Field;
