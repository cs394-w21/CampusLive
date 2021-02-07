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

const newUserProps = {
  eventChoices: { testEvent: false },
  role: "user",
};

const registerWithEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const RegisterForm = ({ navigation }) => {
  const [registerError, setRegisterError] = useState("");

  // on register set up their eventChoice fields
  const handleSignUp = async (values) => {
    const { email, password } = values;
    setRegisterError(null);
    try {
      const authCred = await registerWithEmail(email, password);
      firebase
        .database()
        .ref("users")
        .child(authCred.user.uid)
        .set(newUserProps);
      navigation.navigate("SelectEventScreen");
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
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <Form.Field
        name="password"
        leftIcon="lock"
        placeholder="Password"
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
      <Form.Button title="Register" style={styles.registerButton} />
      <Form.ErrorMessage error={registerError} visible />
    </Form>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    width: windowWidth * 0.2,
  },
});

export default RegisterForm;
