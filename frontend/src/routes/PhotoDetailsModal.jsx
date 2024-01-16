import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ selectedPhoto, closeModal, photos, favoritePhotosArray, onToggleFavorite }) => {  

    if (!selectedPhoto) {
      return null;
    }

  const similarPhotos = selectedPhoto.similar_photos
    ? Object.values(selectedPhoto.similar_photos)
    : [];



  return (
    <div className="photo-details-modal">
      <button onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

        <img
          className="photo-details-modal__image" 
          src={selectedPhoto.urls.full} 
          alt={`Photo by ${selectedPhoto.user.name}` }
        />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={selectedPhoto.user.profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__user-details">{selectedPhoto.user.name}</p>
          <p className="photo-list__user-location" >{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
        </div>
      </div>

      <h1 className="photo-details-modal__header">Similar photos: </h1>

      <div className="photo-details-modal__images">
        <PhotoList
        photos={similarPhotos}
        favoritePhotosArray={favoritePhotosArray}
        onToggleFavorite={onToggleFavorite}
        />
    </div>

    </div>
  );
};

export default PhotoDetailsModal;
