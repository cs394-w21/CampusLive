import axios from "axios";
const CLOUDINARY_UPLOAD_TRANSFORM_PRESET = "hk9vos0y";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/campuslive/upload";

const uploadImage = (file) => {
  const data = {
    file: file,
    upload_preset: CLOUDINARY_UPLOAD_TRANSFORM_PRESET,
  };

  fetch(CLOUDINARY_UPLOAD_URL, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  })
    .then(async (r) => {
      let data = await r.json();
      console.log(data.secure_url);
      return data.secure_url;
    })
    .catch((err) => console.log(err));

  return "FAILED";
};

export default uploadImage;
