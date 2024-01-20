import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (
  { 
    dark, 
    isLiked, 
    toggleLike, 
    photoId, 
    photo, 
    showModal 
  }) => {
  // Destructuring properties from the photo object
  const { urls, user, location } = photo;

  return (
    // Container div for each PhotoListItem
    <div className={`photo-list__item ${dark}`}>
      {/* PhotoFavButton component for liking the photo */}
      <PhotoFavButton 
        isLiked={isLiked} 
        toggleLike={toggleLike} 
        photoId={photoId} 
        dark={dark}>
      </PhotoFavButton>
      
      {/* Displaying the main photo with a click event to show the modal */}
      <img className="photo-list__image" src={urls.regular} alt={`Image taken in ${location.city}, ${location.country}`} onClick={showModal}></img>

      {/* Displaying user details */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile for ${user.username}`}></img>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
