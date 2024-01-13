import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {  
  return (
    <div className="photo-details-modal">
      <button onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

        <img
          className="photo-details-modal__image" 
          src={photo.urls.full} 
          alt={`Photo by ${photo.user.name}` }
        />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <h4 className="photo-list__user-details">{photo.user.name}</h4>
          <h4 className="photo-list__user-location" >{photo.location.city}, {photo.location.country}</h4>
        </div>
      </div>

      <h1 className="photo-details-modal__header">Similar photos: </h1>

      <div className="photo-details-modal__images">
        {photo.similar_photos &&
          Object.values(photo.similar_photos).map((similarPhoto) => (
            <div key={similarPhoto.id} className="photo-details-modal__images">
              <img
                src={similarPhoto.urls.regular}
                alt={`Similar Photo by ${photo.user.name}`}
              />
              <p>{`Photo by ${photo.user.name}`}</p>
            </div>
          ))}

      </div>


    </div>
  );
};

export default PhotoDetailsModal;

