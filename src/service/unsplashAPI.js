import axios from "axios";

export const getPhotos = async (query = "", page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID IFpre-LzGNwvtLwQcEmOgi0EjVCW7K5iHt-tLuxCbIw",
    },
    params: {
      query,
      page,
      per_page: 20,
    },
  });
  return response.data;
};
