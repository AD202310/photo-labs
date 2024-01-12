import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
    // Check if photos and favoritePhotos are defined
    if (!props.photos || !props.favoritePhotos) {
      // Handle the case when photos or favoritePhotos is undefined
      return <div>Error: Photos or favoritePhotos is undefined</div>;
    }

  return (
    <ul className="photo-list">
      {props.photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photo={photoData}
          isFavorite={props.favoritePhotos.includes(photoData.id)}
          onToggleFavorite={props.onToggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
