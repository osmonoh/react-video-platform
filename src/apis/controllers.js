import youtube from "./youtube";

const getVideoList = async (term, numberOfVideos, setter, mount) => {
  const result = await youtube.get("./search", {
    params: {
      q: term,
      maxResults: numberOfVideos,
    },
  });

  if (mount) {
    setter(result.data.items);
  }
};

export { getVideoList };
