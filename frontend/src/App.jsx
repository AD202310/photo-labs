import React from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const { 
    state, 
    updateToFavPhotoIds, 
    removeFavPhotoIds, 
    setPhotoSelected, 
    onClosePhotoDetailsModal, 
    fetchPhotosByTopic 
  } = useApplicationData();

  const openModal = (photo) => {
    setPhotoSelected(photo);
  };

  const closeModal = () => {
    onClosePhotoDetailsModal();
  };

  const handleToggleFavorite = (photoId) => {
    state.favoritePhotosArray.includes(photoId)
    ? removeFavPhotoIds(photoId)
    : updateToFavPhotoIds(photoId);
  };

  const handlePhotoByTopic = (topicId) => {
    fetchPhotosByTopic(topicId)
  };



  return (
    <>
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        onPhotoClick={(photo) => openModal(photo)}
        favoritePhotosArray={state.favoritePhotosArray}
        onToggleFavorite={(id) => handleToggleFavorite(id)}
        fetchPhotoByTopic={(topicId) => handlePhotoByTopic(topicId)}
      />
      {state.isModalOpen &&
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          closeModal={closeModal}
          photos={state.photoData}
          favoritePhotosArray={state.favoritePhotosArray}
          onToggleFavorite={(id) => handleToggleFavorite(id)}
        />
      }
    </>
  );
};

export default App;
