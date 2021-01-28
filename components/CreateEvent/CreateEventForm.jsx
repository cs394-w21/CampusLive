import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Moment from "moment";
import Form from "../Form";
import { eventUploadBackground } from "../../constants/CreateEventConstants";
import { firebase } from "../../utils/firebase";

const dateRegex = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/(2[0-9])/;

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  host: Yup.string().required().label("Host"),
  location: Yup.string().required().label("Location"),
  startTime: Yup.string()
    .matches(dateRegex, "Date must be in format MM/DD/YY")
    .required()
    .label("Start Time"),
  endTime: Yup.string()
    .matches(dateRegex, "Date must be in format MM/DD/YY")
    .test("is-greater", "End should be after start.", (value) => {
      const { startTime } = this.parent;
      return value && value !== ""
        ? Moment(value, "MM-DD-YY").isSameOrAfter(Moment(startTime, "MM-DD-YY"))
        : true;
    })
    .label("End Time"),
  description: Yup.string().label("Description"),
});

const CreateEventForm = () => {
  const [submitError, setSubmitError] = useState("");

  const handleCreateEvent = (values) => {
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
        // leftIcon="account"
        placeholder="Host"
        autoCapitalize="none"
        textAlign="center"
      />
      <Form.Field
        name="location"
        // leftIcon="map-marker"
        placeholder="Location"
        autoCapitalize="none"
        textAlign="center"
      />
      <Form.Field
        name="startTime"
        // leftIcon="clock-in"
        placeholder="Start Time"
        textAlign="center"
      />
      <Form.Field
        name="endTime"
        // leftIcon="clock-out"
        placeholder="End Time"
        textAlign="center"
      />
      <Form.Field
        name="description"
        // leftIcon="card-text-outline"
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
