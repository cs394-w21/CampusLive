import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import Form from "../Form";
import DatePicker from "../DatePicker";
import CreateEventImage from "./CreateEventImage";
import * as Yup from "yup";
import { firebase } from "../../utils/firebase";
import { eventUploadBackground } from "../../constants/CreateEventConstants";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("title"),
  host: Yup.string().required().label("host"),
  location: Yup.string().required().label("location"),
  time: Yup.string().required().label("time"),
  description: Yup.string().required().label("description"),
});

const CreateEventForm = () => {
  const [submitError, setSubmitError] = useState("");

  const handleCreateEvent = (values) => {
    console.log(values);
    // TODO: Upload values.image to cloudinary, then grab the new hosted url
    // Then use that url as part of upload to firebase

    // firebase
    //   .database()
    //   .ref("events")
    //   .push(values)
    //   .catch((error) => {
    //     setSubmitError(error.message);
    //   });
  };

  return (
    <Form
      initialValues={{
        image: eventUploadBackground,
        title: "title",
        host: "host",
        location: "location",
        time: "time",
        description: "description",
      }}
      onSubmit={(values) => handleCreateEvent(values)}
      validationSchema={validationSchema}
    >
      <Form.FormEventImage name="image" />
      <Form.Field
        name="title"
        leftIcon="identifier"
        placeholder="Title"
        autoCapitalize="none"
        autoFocus={true}
      />
      <Form.Field
        name="host"
        leftIcon="account"
        placeholder="Host"
        autoCapitalize="none"
      />
      <Form.Field
        name="location"
        leftIcon="calendar-range"
        placeholder="Location"
        autoCapitalize="none"
      />
      <Form.Field name="time" leftIcon="clock-outline" placeholder="Time" />
      <Form.Field
        name="description"
        leftIcon="card-text-outline"
        placeholder="Description"
        autoCapitalize="none"
      />
      <Form.Button title={"Create Event"} />
      {<Form.ErrorMessage error={submitError} visible={true} />}
    </Form>
  );
};

export default CreateEventForm;

// {

//     <Formik
//       initialValues={{ date: "" }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {(props) => {
//         const {
//           values,
//           touched,
//           errors,
//           dirty,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           handleReset,
//           setFieldValue,
//         } = props;
//         return (
//           <form onSubmit={handleSubmit}>
//             <DatePicker
//               name="date"
//               value={values.date}
//               onChange={setFieldValue}
//             />
//             <button
//               type="button"
//               className="outline"
//               onClick={handleReset}
//               disabled={!dirty || isSubmitting}
//             >
//               Reset
//             </button>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>

//             {/* <DisplayFormikState {...props} /> */}
//           </form>
//         );
//       }}
//     </Formik>
// }
