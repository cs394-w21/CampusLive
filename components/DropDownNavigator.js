import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const NavigationList = () => {
  const screens = ["Event Selector", "My Events"];
  return screens.map((screen) => (
    <TouchableOpacity>
      <Text style={styles.navigationText}>{screen}</Text>
    </TouchableOpacity>
  ));
};

const DropDownNavigator = ({ navigation }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const updateDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity onPress={updateDropdown}>
        <Entypo name="menu" size={32} color="white" />
      </TouchableOpacity>
      {toggleDropdown && <NavigationList />}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    alignItems: "flex-end",
  },
  navigationText: {
    textAlign: "right",
  },
});

export default DropDownNavigator;
