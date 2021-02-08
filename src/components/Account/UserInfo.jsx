import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Form from "../Form";
import { windowWidth } from "../../constants/WindowSize";
import firebase from "../../utils/firebase";
import UserContext from "../../utils/UserContext";

const UserInfo = () => {
  const { user } = useContext(UserContext);
  const [signOutError, setSignOutError] = useState("");

  const handleSignOut = async () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => setSignOutError(error));
  };

  return (
    <View styles={styles.container}>
      <Text>Welcome {user.email}!</Text>
      <Form onSubmit={handleSignOut}>
        <Form.Button title="Sign Out" style={styles.signOutButton} />
        <Form.ErrorMessage error={signOutError} visible />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#E4E0EE",
    // alignItems: "center",
    // justifyContent: "center",
  },
  signOutButton: {
    width: windowWidth * 0.2,
  },
});

export default UserInfo;
