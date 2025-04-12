import React, { useContext, useState } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Gallery = () => {
  const { images, loading, fetchImages } = useContext(PhotoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false); 

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setHasSearched(true); 
      fetchImages(searchTerm);
    }
  };
 

  return (
    <div className="gallery-container">
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          placeholder="write here..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && hasSearched  ? (
        <p>loading...</p>
      ) : (
        hasSearched && (
          <div className="image-grid">
            {images.length > 0 ? (
              images.map((img) => (
                <img
                  key={img.id}
                  src={img?.src?.medium}
                  alt={img?.alt || "image"}
                  className="image-item"
                />
              ))
            ) : (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1000px" }}>
                  <p>No images found for the entered word.</p>
                </div> 
                 )}
          </div>
        )
      )}
    </div>
  );
};

export default Gallery;
