import React, { useState } from 'react'
import '../styles/HomeRoute.scss'
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';


const HomeRoute = (props) => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const handleToggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  console.log(favoritePhotos)    // TO BE REMOVED

  return (
    <div className="home-route">
      <TopNavigation 
        topics={props.topics} 
        favoritePhotos={favoritePhotos}
      />
      <PhotoList 
        photos={props.photos} 
        favoritePhotos={favoritePhotos} 
        onToggleFavorite={handleToggleFavorite}
        onPhotoClick={props.onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;