import axios from "axios";

interface GetPhotos {
  total: number;
  total_pages: number;
  results: Result[];
}

interface Result {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

export const getPhotos = async (query = "", page = 1): Promise<GetPhotos> => {
  const response = await axios.get<GetPhotos>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID IFpre-LzGNwvtLwQcEmOgi0EjVCW7K5iHt-tLuxCbIw",
      },
      params: {
        query,
        page,
        per_page: 20,
      },
    }
  );
  return response.data;
};
