import React from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  // Destructuring values from the custom hook useApplicationData
  const {
    state: {
      likes,
      selectedPhoto,
      modal,
      photoData,
      topicData,
      dark
    },
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    getAllPhotos,
    onClosePhotoDetailsModal,
    setDark,
    getFavPhotos
  } = useApplicationData();

  // Function to check if a photo is liked
  const isLiked = photoId => likes.includes(photoId);

  // Check if there are any liked photos
  const isFavPhotoExist = likes.length > 0;

  return (
    // Main App component
    <div className={`App ${dark}`}>
      {/* HomeRoute component with various props */}
      <HomeRoute
        isFavPhotoExist={isFavPhotoExist}
        isLiked={isLiked}
        toggleLike={updateToFavPhotoIds}
        photos={photoData}
        topics={topicData}
        getPhotosByTopic={getPhotosByTopic}
        getAllPhotos={getAllPhotos}
        showModal={setPhotoSelected}
        dark={dark}
        setDark={setDark}
        getFavPhotos={getFavPhotos}
      />
      
      {/* Conditional rendering of PhotoDetailsModal component */}
      {modal &&
        <PhotoDetailsModal
          showModal={setPhotoSelected}
          hideModal={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          isLiked={isLiked}
          toggleLike={updateToFavPhotoIds}
          dark={dark}
        />}
    </div>
  );
};

export default App;
