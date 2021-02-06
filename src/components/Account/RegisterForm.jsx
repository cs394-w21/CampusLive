import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import Form from "../Form";
import { windowWidth } from "../../constants/WindowSize";
import firebase from "../../utils/firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter an email").email().label("Email"),
  password: Yup.string()
    .required("No password provided")
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirm: Yup.string()
    .required("Re-enter password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const registerWithEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState("");

  const handleSignUp = async (values) => {
    const { email, password } = values;
    setRegisterError(null);
    try {
      await registerWithEmail(email, password);
      // navigation.navigate("SelectEventScreen");
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  return (
    <Form
      initialValues={{
        email: "",
        password: "",
        confirm: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSignUp}
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
      <Form.Field
        name="confirm"
        leftIcon="lock"
        placeholder="Confirm password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />
      <Form.Button title="Register" style={styles.loginButton} />
      <Form.ErrorMessage error={registerError} visible />
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

export default RegisterForm;
