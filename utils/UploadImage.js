const CLOUDINARY_UPLOAD_TRANSFORM_PRESET = "hk9vos0y";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/campuslive/upload";
const FAILED_UPLOAD = "FAILED";

const uploadImage = async (file) => {
  const data = {
    file: file,
    upload_preset: CLOUDINARY_UPLOAD_TRANSFORM_PRESET,
  };

  return fetch(CLOUDINARY_UPLOAD_URL, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  });
};

export default uploadImage;
export { FAILED_UPLOAD };
