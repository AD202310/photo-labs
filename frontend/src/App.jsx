import React, { useState } from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();

  const openModal = (photo) => {
    setPhotoSelected(photo);
  };

  const closeModal = () => {
    onClosePhotoDetailsModal();
  };

  const handleToggleFavorite = (photoId) => {
    updateToFavPhotoIds(photoId);
  };

     console.log("App/openModal/state:  ", state.favoritePhotosArray)           //REMOVE

  return (
    <>
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={(photo) => openModal(photo)}
        favoritePhotosArray={state.favoritePhotosArray}
        onToggleFavorite={(id) => handleToggleFavorite(id)}
      />
      {state.isModalOpen &&
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          closeModal={closeModal}
          photos={photos}
          favoritePhotosArray={state.favoritePhotosArray}
          onToggleFavorite={(id) => handleToggleFavorite(id)}
        />
      }
    </>
  );
};

export default App;
