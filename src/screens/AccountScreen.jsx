/* eslint-disable react/style-prop-object */
import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import LoginForm from "../components/Account/LoginForm";
import RegisterForm from "../components/Account/RegisterForm";
import UserInfo from "../components/Account/UserInfo";
import UserContext from "../utils/UserContext";
import { windowWidth } from "../constants/WindowSize";
import Form from "../components/Form";

const LoginRegisterContainer = ({
  loginType,
  handleChangeLogin,
  navigation,
  user,
}) => {
  if (user && user.uid) {
    return (
      <View style={styles.formContainer}>
        <UserInfo />
      </View>
    );
  }
  return (
    <View style={styles.formContainer}>
      {loginType ? (
        <LoginForm navigation={navigation} />
      ) : (
        <RegisterForm navigation={navigation} />
      )}
      <Text style={styles.changeLoginText}>
        {loginType ? "Don't have an account?" : "Already have an account?"}
      </Text>
      <Form initialValues={{}} onSubmit={handleChangeLogin}>
        <Form.Button
          title={loginType ? "Register" : "Login"}
          style={styles.changeLoginButton}
        />
      </Form>
    </View>
  );
};
// eslint-disable-next-line no-unused-vars
const AccountScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  // false = register, true = login
  const [loginType, setLoginType] = useState(true);

  const handleChangeLogin = () => setLoginType(!loginType);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <LoginRegisterContainer
        loginType={loginType}
        handleChangeLogin={handleChangeLogin}
        navigation={navigation}
        user={user}
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
  changeLoginButton: {
    width: windowWidth * 0.2,
  },
  changeLoginText: {
    textAlign: "center",
  },
  changeLoginButtonText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default AccountScreen;
