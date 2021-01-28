import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { windowWidth } from "../../constants/WindowSize";
import Colors from "./colors";

export default function FormTextInput({
  leftIcon,
  width = "100%",
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={{ flex: 1 }}
    // >
    //   <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={Colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.mediumGrey}
        {...otherProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={Colors.mediumGrey}
            style={styles.rightIconStyles}
          />
        </TouchableOpacity>
      )}
    </View>
    //   </SafeAreaView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    width: Math.min(windowWidth * 0.75, 400),
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    width: Math.min(windowWidth * 0.75, 400),
    fontSize: 18,
    color: Colors.black,
  },
  rightIconStyles: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
