import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import FormTextInput from "./FormTextInput";

export default function FormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <React.Fragment>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FormTextInput
          value={values[name]}
          onChangeText={(text) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          width={width}
          {...otherProps}
        />
      </KeyboardAvoidingView>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
