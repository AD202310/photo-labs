import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(
  { isLiked, 
    toggleLike, 
    photoId, 
    dark 
  }) {
  return (
    // Container div for the PhotoFavButton component
    <div className={`photo-list__fav-icon ${dark}`} onClick={() => toggleLike(photoId)}>
      {/* Container div for the FavIcon component */}
      <div className="photo-list__fav-icon-svg">
        {/* FavIcon component to display the favorite icon */}
        <FavIcon 
          selected={isLiked(photoId)} 
          dark={dark}>
        </FavIcon>
      </div>
    </div>
  );
}


export default PhotoFavButton;
