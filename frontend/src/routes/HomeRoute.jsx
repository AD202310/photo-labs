import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        favoritePhotosArray={props.favoritePhotosArray}
      />
      <PhotoList
        photos={props.photos}
        favoritePhotosArray={props.favoritePhotosArray}
        onToggleFavorite={props.onToggleFavorite}
        onPhotoClick={props.onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
