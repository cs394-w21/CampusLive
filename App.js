import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is Robert Goodman's first commit!</Text>
      <Text style={styles.hamilton}>This is Hamilton Vuu's first commit!</Text>
      <Text style={styles.megs}>This is Megs Yadav's first commit!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hamilton: {
    color: "#00f",
  },
  megs: {
    color: "#f0f",
  },
});
