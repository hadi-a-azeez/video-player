import { data } from "../data";

const videos = data.videos;

export const getAllData = async () => {
  return data.videos;
};

export const getVidoeData = async (id) => {
  let responseData;
  videos.map((video) => {
    if (id === video.id) {
      responseData = video;
    }
  });
  return responseData;
};

export const getSimilarVideos = async (cat_id, vid_id) => {
  const responseData = videos.filter(
    (video) => cat_id === video.categoryId && vid_id !== video.id
  );
  return responseData;
};
