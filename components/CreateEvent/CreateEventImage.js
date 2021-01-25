import React, { useState, useEffect } from "react";
// import Dropzone from "react-dropzone";
import * as ImagePicker from "expo-image-picker";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { eventUploadBackground } from "../../constants/CreateEventConstants";
import { windowWidth } from "../../constants/WindowSize";
import { textFont } from "../../constants/Styles";
import uploadImage from "../../utils/UploadImage";

const CreateEventImage = () => {
  const [eventImageUrl, setEventImageUrl] = useState(eventUploadBackground);

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

  const uploadImageWrapper = (imageFile) => {
    console.log(imageFile);
    const url = uploadImage(imageFile);
    console.log(url);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: false,
    });

    console.log(result);
    if (!result.cancelled) {
      const imageUri = `data:image/jpg;base64,${result.uri}`;
      uploadImageWrapper(imageUri);
    }
  };

  return (
    <ImageBackground source={{ uri: eventImageUrl }} style={styles.eventImage}>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadText}>Upload Event Photo.</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  uploadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: textFont,
  },
  eventImage: {
    width: Math.min(200, windowWidth * 0.3),
    height: Math.min(200, windowWidth * 0.3),
  },
  uploadButton: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderStyle: "solid",
    padding: 5,
    borderRadius: 10,
  },
  uploadContainer: {
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CreateEventImage;
