import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (
  { 
    isLiked, 
    toggleLike, 
    photos, 
    showModal, 
    dark 
  }) => {
    
  // Check if photos is an object and convert it to an array if needed
  if (typeof(photos) === 'object') {
    photos = Object.values(photos);
  } 
  
  // Render the list of photos using PhotoListItem component
  return (
    // Unordered list container for the PhotoList component
    <ul className="photo-list">
      {/* Map through the photos array and render a PhotoListItem for each photo */}
      {photos.map(photo => {
        return (
          <PhotoListItem 
            key={photo.id} 
            isLiked={isLiked} 
            toggleLike={toggleLike} 
            photoId={photo.id} 
            photo={photo} 
            showModal={() => showModal(photo)} 
            dark={dark}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
