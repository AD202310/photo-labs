import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

// Functional component representing the HomeRoute
const HomeRoute = (
  { 
    getAllPhotos, 
    isFavPhotoExist, 
    isLiked, 
    toggleLike, 
    photos, 
    topics, 
    getPhotosByTopic, 
    showModal, 
    dark, 
    setDark 
  }) => {
  return (
    // Main container div for the HomeRoute component
    <div className="home-route">
      {/* TopNavigationBar component with various props */}
      <TopNavigationBar 
        getAllPhotos={getAllPhotos} 
        isFavPhotoExist={isFavPhotoExist} 
        topics={topics} 
        getPhotosByTopic={getPhotosByTopic} 
        dark={dark} 
        setDark={setDark}
      />
      
      {/* PhotoList component with various props */}
      <PhotoList 
        isLiked={isLiked} 
        toggleLike={toggleLike} 
        photos={photos} 
        showModal={showModal} 
        dark={dark}
      />
    </div>
  );
};

// Export the HomeRoute component
export default HomeRoute;
