import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useFormikContext } from "formik";
import * as ImagePicker from "expo-image-picker";
import FormErrorMessage from "./FormErrorMessage";
import { windowWidth } from "../../constants/WindowSize";
import { textFont } from "../../constants/Styles";
import { eventUploadBackground } from "../../constants/CreateEventConstants";
import uploadImage from "../../utils/UploadImage";

// TODO: Keeping base64 of the an image is super laggy bc the field is humongous
const FormEventImage = ({ name }) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: false,
      base64: true,
    });

    // TODO: What's behavior on android
    if (!result.cancelled) {
      const base64Img =
        Platform.OS == "ios"
          ? `data:image/jpg;base64,${result.base64}`
          : result.uri;

      uploadImage(base64Img)
        .then(async (r) => {
          let data = await r.json();
          console.log("url: ", data.secure_url);
          setFieldValue(name, data.secure_url);
        })
        .catch((err) => {
          console.log("failed picture upload ", err);
        });
    }
  };

  return (
    <View style={styles.uploadContainer}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <ImageBackground
          source={{ uri: values[name] }}
          style={styles.eventImage}
        >
          <View style={styles.textContainer}>
            {values[name] === eventUploadBackground && (
              <Text style={styles.uploadText}>Upload Event Photo.</Text>
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: textFont,
    textAlign: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderStyle: "solid",
    padding: 5,
    borderRadius: 10,
  },
  eventImage: {
    width: Math.min(300, windowWidth * 0.4),
    height: Math.min(300, windowWidth * 0.4),
    borderStyle: "dashed",
    borderColor: "rgba(0, 0, 0, .4)",
    borderRadius: 15,
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadButton: {},
  textContainer: {
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  uploadContainer: {
    marginVertical: 5,
    paddingTop: 10,
  },
});

export default FormEventImage;
