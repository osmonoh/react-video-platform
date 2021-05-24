import axios from "axios";

// const KEY = "AIzaSyC_YUc8cYjX7SxB5W9DQwplYlc-uSR2CaM";
const KEY = "AIzaSyCpTVuL0bIgwiPaGWpoR6JgFdjk2D0LVIg";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    key: KEY,
  },
});

export default youtube;
