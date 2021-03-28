import PublitioAPI from "publitio_js_sdk/build/publitio-api.min.js";
const publitio = new PublitioAPI("Stntcadtb0t004x5akqx", "GAXNwlGjsqwA22DyXzmt6c9PhVDzyHGJ");

const publitioUtil = () => {
  const uploadFile = async (file, kind) => {
    const response = await publitio.uploadFile(file, kind);
    // .then(resp => console.log("publitio upload: ", resp))
    // .catch(err => console.log("publitio upload error: ", err));
    console.log("publitio upload: ", response);
    return response;
  };

  return { uploadFile };
};

export { publitioUtil as usePublitioUtil };

