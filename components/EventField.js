import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const EventField = ({ text, icon }) => {
  return (
    <View style={styles.fieldContainer}>
      <Entypo name={icon} size={20} color="black" style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  text: {},
});

export default EventField;
