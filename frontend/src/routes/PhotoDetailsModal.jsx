import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';


const PhotoDetailsModal = (
  { 
    isLiked, 
    toggleLike, 
    hideModal, 
    selectedPhoto, 
    dark 
  }) => {
  // Destructuring properties from selectedPhoto
  const { id, urls, user, location, similar_photos } = selectedPhoto;

  return (
    // Main container div for the PhotoDetailsModal component
    <div className={`photo-details-modal ${dark}`}>
      {/* Close button for hiding the modal */}
      <button className="photo-details-modal__close-button" onClick={hideModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill={dark === 'dark' ? '#fff' : '#202124'} className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

      {/* Container for the main content of the modal */}
      <div className="photo-details-modal__images">
        {/* PhotoFavButton component for liking the photo */}
        <PhotoFavButton 
          isLiked={isLiked} 
          toggleLike={toggleLike} 
          photoId={id} 
          dark={dark}>
        </PhotoFavButton>

        {/* Displaying the main photo */}
        <img className="photo-details-modal__image" src={urls.regular} alt={`Image taken in ${location.city}, ${location.country}`}></img>

        {/* Displaying photographer details */}
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile for ${user.username}`}></img>
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>

        {/* Header for similar photos section */}
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>

      {/* Container for the top bar and similar photos */}
      <div className='photo-details-modal__top-bar'>
        {/* PhotoList component for displaying similar photos */}
        <PhotoList 
          isLiked={isLiked} 
          toggleLike={toggleLike} 
          photos={similar_photos} 
          dark={dark}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
