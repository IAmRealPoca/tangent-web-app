import PublitioAPI from "publitio_js_sdk/build/publitio-api.min.js";
const publitio = new PublitioAPI(process.env.PUBLITIO_KEY, process.env.PUBLITIO_SECRET);

export const publitioUtil = () => {
  const uploadFile = async (file, kind) => {
    publitio.uploadFile(file, kind)
    .then(resp => console.log("publitio upload: ", resp))
    .catch(err => console.log("publitio upload error: ", err));
  };

  return { uploadFile };
};

