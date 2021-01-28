import React from "react";
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
      <FormTextInput
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
