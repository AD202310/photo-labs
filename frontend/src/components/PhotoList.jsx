import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
    if (!props.photos || !props.favoritePhotos) {
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
          onPhotoClick={props.onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
