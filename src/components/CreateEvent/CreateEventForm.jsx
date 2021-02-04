import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Moment from "moment";
import Form from "../Form";
import { eventUploadBackground } from "../../constants/CreateEventConstants";
import firebase from "../../utils/firebase";

const dateRegex = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/(2[0-9]) ([0-9]|1[012]):([0-5][0-9]) (AM|PM)/;

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  host: Yup.string().required().label("Host"),
  location: Yup.string().required().label("Location"),
  startDateTime: Yup.string()
    .matches(dateRegex, "Date must be in format MM/DD/YY HH:MM AM")
    .required()
    .label("Start Date and Time"),
  endDateTime: Yup.string()
    .matches(dateRegex, "Date must be in format MM/DD/YY HH:MM AM")
    // eslint-disable-next-line func-names
    .test("is-greater", "End should be after start", function (value) {
      const { startDateTime } = this.parent;
      return value && value !== ""
        ? Moment(value, "MM/DD/YY hh:mm a").isAfter(
            Moment(startDateTime, "MM/DD/YY hh:mm a")
          )
        : true;
    })
    .label("End Date and Time"),
  description: Yup.string().label("Description"),
});

const CreateEventForm = () => {
  const [submitError, setSubmitError] = useState("");

  const handleCreateEvent = (values) => {
    // eslint-disable-next-line no-param-reassign
    values.startDateTime = firebase.firestore.Timestamp.fromDate(
      new Date(values.startDateTime)
    );
    // eslint-disable-next-line no-param-reassign
    values.endDateTime = firebase.firestore.Timestamp.fromDate(
      new Date(values.endDateTime)
    );

    firebase
      .database()
      .ref("events")
      .push(values)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Event Created!");
      })
      .catch((error) => {
        setSubmitError(error.message);
      });
  };

  return (
    <Form
      initialValues={{
        img: eventUploadBackground,
        title: "",
        host: "",
        location: "",
        startDateTime: "",
        endDateTime: "",
        description: "",
      }}
      onSubmit={(values) => handleCreateEvent(values)}
      validationSchema={validationSchema}
      style={styles.form}
    >
      <Form.EventImage name="img" />
      <Form.Field
        name="title"
        placeholder="Title"
        autoCapitalize="none"
        textAlign="center"
      />
      <Form.Field
        name="host"
        placeholder="Host"
        autoCapitalize="none"
        textAlign="center"
      />
      <Form.Field
        name="location"
        placeholder="Location"
        autoCapitalize="none"
        textAlign="center"
      />
      <Form.Field
        name="startDateTime"
        placeholder="Start Date and Time"
        textAlign="center"
      />
      <Form.Field
        name="endDateTime"
        placeholder="End Date and Time"
        textAlign="center"
      />
      <Form.Field
        name="description"
        placeholder="Description"
        autoCapitalize="none"
        textAlign="center"
        multiline
        numberOfLines={4}
      />
      <Form.Button title="Create Event" />
      <Form.ErrorMessage error={submitError} visible />
    </Form>
  );
};

const styles = StyleSheet.create({
  formContainer: {},
});

export default CreateEventForm;
