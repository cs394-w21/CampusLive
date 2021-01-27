import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";
import Moment from "moment";
import Form from "../Form";
import { eventUploadBackground } from "../../constants/CreateEventConstants";
import { firebase } from "../../utils/firebase";
import uploadImage from "../../utils/UploadImage";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  host: Yup.string().required().label("Host"),
  location: Yup.string().required().label("Location"),
  startTime: Yup.string()
    .matches(
      /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/(2[0-9])/,
      "Start Date must be in format MM/DD/YY"
    )
    .required()
    .label("Start Time"),
  endTime: Yup.string()
    .matches(
      /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/(2[0-9])/,
      "End Date must be in format MM/DD/YY"
    )
    .test("is-greater", "End should be after start.", function (value) {
      const { startTime } = this.parent;
      return value && value !== ""
        ? Moment(value, "MM-DD-YY").isSameOrAfter(Moment(startTime, "MM-DD-YY"))
        : true;
    })
    .label("End Time"),
  description: Yup.string().required().label("description"),
});

const CreateEventForm = () => {
  const [submitError, setSubmitError] = useState("");

  const handleCreateEvent = (values) => {
    firebase
      .database()
      .ref("events")
      .push(values)
      .then(() => {
        alert("Event Created!");
      })
      .catch((error) => {
        setSubmitError(error.message);
      });
  };
  // TODO: lazy upload image or do it right away
  return (
    <Form
      initialValues={{
        img: eventUploadBackground,
        title: "",
        host: "",
        location: "",
        startTime: "",
        endTime: "",
        description: "",
      }}
      onSubmit={(values) => handleCreateEvent(values)}
      validationSchema={validationSchema}
    >
      <Form.EventImage name="img" />
      <Form.Field
        name="title"
        placeholder="Title"
        autoCapitalize="none"
        textAlign={"center"}
      />
      <Form.Field
        name="host"
        // leftIcon="account"
        placeholder="Host"
        autoCapitalize="none"
        textAlign={"center"}
      />
      <Form.Field
        name="location"
        // leftIcon="map-marker"
        placeholder="Location"
        autoCapitalize="none"
        textAlign={"center"}
      />
      <Form.Field
        name="startTime"
        // leftIcon="clock-in"
        placeholder="Start Time"
        textAlign={"center"}
      />
      <Form.Field
        name="endTime"
        // leftIcon="clock-out"
        placeholder="End Time"
        textAlign={"center"}
      />
      <Form.Field
        name="description"
        // leftIcon="card-text-outline"
        placeholder="Description"
        autoCapitalize="none"
        textAlign={"center"}
        multiline
        numberOfLines={4}
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
