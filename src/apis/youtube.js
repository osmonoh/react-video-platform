import axios from "axios";

// const KEY = process.env.REACT_APP_KEY_1;
const KEY = process.env.REACT_APP_KEY_2;
// const KEY = process.env.REACT_APP_KEY_3;

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    key: KEY,
  },
});

export default youtube;
