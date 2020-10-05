import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: "http://localhost:5001/clone-4348a/us-central1/api",
});

export default axios;
