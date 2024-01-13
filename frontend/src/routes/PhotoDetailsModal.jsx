import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  console.log("-----------PhotoDetailsModal: ", photo)
  
  return (
    <div className="photo-details-modal">
      <button onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <h1>
        Photo details: 
      </h1>

    </div>
  );
};

export default PhotoDetailsModal;
