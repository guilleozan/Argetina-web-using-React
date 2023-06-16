import React, { useState, useEffect } from "react";
import { Styles } from "./../styles/Gallery.css";

const apiKey = " 9BcHEAE80zoYXNxcCHH4rNjIY51H96LCWqwxwxaJBcoppdIcTZlRaqsH";

const GalleryPage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search?query=argentina&per_page=10&page=1`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
  return (
    <>
      <div className=" text">
        <h1> <strong>Welcome to our captivating gallery of images showcasing the beauty of
        Argentina. 
        <br/>
        <h2>Each photograph has been carefully curated to provide a
        glimpse into the diverse landscapes, vibrant culture, and stunning
        natural wonders that make Argentina a truly remarkable destination.</h2>
        
        </strong></h1>
      </div>
      <div className="photo-container">
        {photos.map((photo) => (
          <img
            className="photo"
            key={photo.id}
            src={photo.src.large}
            alt={photo.photographer}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryPage;

// api pexels:
