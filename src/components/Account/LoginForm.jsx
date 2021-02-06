import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import Form from "../Form";
import { windowWidth } from "../../constants/WindowSize";
import firebase from "../../utils/firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter an email").email().label("Email"),
  password: Yup.string().required("No password provided").label("Password"),
});

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");

  const loginWithEmail = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const handleLogin = async (values) => {
    const { email, password } = values;
    setLoginError(null);
    try {
      await loginWithEmail(email, password);
      // navigation.navigate("SelectEventScreen");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <Form
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Form.Field
        name="email"
        leftIcon="email"
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <Form.Field
        name="password"
        leftIcon="lock"
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />
      <Form.Button title="Login" style={styles.loginButton} />
      <Form.ErrorMessage error={loginError} visible />
    </Form>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    width: windowWidth * 0.2,
  },
});

export default LoginForm;
