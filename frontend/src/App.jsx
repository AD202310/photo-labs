import React, { useState, useEffect } from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritePhotosArray, setFavoritePhotosArray] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const handleToggleFavorite = (photoId) => {
    if (favoritePhotosArray.includes(photoId)) {
      setFavoritePhotosArray(favoritePhotosArray.filter(id => id !== photoId));
    } else {
      setFavoritePhotosArray([...favoritePhotosArray, photoId]);
    }
  };

  console.log("APP Array: ", favoritePhotosArray)    // TO BE REMOVED !!! 


  return (
    <>
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={(photo) => openModal(photo)}
        favoritePhotosArray={favoritePhotosArray}
        onToggleFavorite={(id) => handleToggleFavorite(id)}
      />
      {isModalOpen &&
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          photos={photos}
          favoritePhotosArray={favoritePhotosArray}
          onToggleFavorite={(id) => handleToggleFavorite(id)}
        />
      }
    </>
  );
};

export default App;
