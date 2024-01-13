import React, { useState } from 'react'
import '../styles/HomeRoute.scss'
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';


const HomeRoute = (props) => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const handleToggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

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
