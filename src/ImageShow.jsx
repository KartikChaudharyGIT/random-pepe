import React, { useState } from "react";
import imageList from "./images.json";

export default function ImageShow() {
  const [randomImageUrl, setRandomImageUrl] = useState("");

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    setRandomImageUrl(randomImage);
  };

  return (
    <div className="container">
     
      <button className="button" onClick={getRandomImage}>
        Random pepe
      </button>{" "}
      {randomImageUrl && <img src={randomImageUrl} alt="img" />}
    </div>
  );
}
