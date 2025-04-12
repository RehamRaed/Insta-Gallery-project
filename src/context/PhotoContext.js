import { createContext, useState } from "react";
import pexelsAPIKey from "../config";


export const PhotoContext = createContext();


export const PhotoProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const fetchImages = async (query) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=50`,
        {
          headers: {
            Authorization: pexelsAPIKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("  error ");
      }

      const data = await response.json();
      setImages(data.photos); 
    } catch (error) {
      console.error("Error while fetching data :", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <PhotoContext.Provider value={{ images, loading, fetchImages }}>
      {children}
    </PhotoContext.Provider>
  );
};
