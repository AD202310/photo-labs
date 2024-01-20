import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';


const TopNavigationBar = (
  { 
    dark, 
    setDark, 
    getAllPhotos, 
    topics, 
    getPhotosByTopic, 
    isFavPhotoExist 
  }) => {

  return (
    // Main container div for the TopNavigationBar component
    <div className="top-nav-bar">
      {/* Logo for the application, clicking on it triggers the fetching of all photos */}
      <span className="top-nav-bar__logo" onClick={getAllPhotos}>PhotoLabs</span>

      {/* TopicList component for displaying a list of topics */}
      <TopicList 
        topics={topics} 
        getPhotosByTopic={getPhotosByTopic} 
      />

      {/* FavBadge component for displaying a badge indicating the existence of liked photos */}
      <FavBadge 
        dark={dark} 
        setDark={setDark} 
        isFavPhotoExist={isFavPhotoExist} 
      />
    </div>
  );
};

export default TopNavigationBar;
