import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem key={photoData.id} photo={photoData} />
      ))}
    </ul>
  );
};;

export default PhotoList;
