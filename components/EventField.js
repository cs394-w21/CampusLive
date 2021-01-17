import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const EventField = ({ text, icon }) => {
  return (
    <View style={styles.fields}>
      <Entypo name={icon} size={20} color="black" />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fields: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
});

export default EventField;
