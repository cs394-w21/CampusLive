/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import LoginForm from "../components/Account/LoginForm";
import RegisterForm from "../components/Account/RegisterForm";

const LoginRegisterContainer = ({ loginType, handleChangeLogin }) => (
  <View style={styles.formContainer}>
    {loginType ? <LoginForm /> : <RegisterForm />}
    <Text>
      {loginType ? "Don't have an account?" : "Already have an account?"}
    </Text>
    <TouchableOpacity
      onPress={handleChangeLogin}
      style={{ borderWidth: 3, borderColor: "black" }}
    >
      <Text>{loginType ? "Register" : "Login"}</Text>
    </TouchableOpacity>
  </View>
);
// eslint-disable-next-line no-unused-vars
const AccountScreen = ({ navigation }) => {
  // false = register, true = login
  const [loginType, setLoginType] = useState(true);

  const handleChangeLogin = () => setLoginType(!loginType);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <LoginRegisterContainer
        loginType={loginType}
        handleChangeLogin={handleChangeLogin}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
  },
});

export default AccountScreen;
