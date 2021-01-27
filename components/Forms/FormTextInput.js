import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "./colors";

export default function FormTextInput({
  leftIcon,
  width = "100%",
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS !== "web" ? "height" : "padding"}
    >
      <View style={[styles.container, { width }]}>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 18,
    color: Colors.black,
  },
  rightIconStyles: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
