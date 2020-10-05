import axiosInstance from "axios";

const axios = axiosInstance.create({
  // baseURL: "http://localhost:5001/clone-4348a/us-central1/api",
  baseURL: "https://us-central1-clone-4348a.cloudfunctions.net/api",
});

export default axios;
