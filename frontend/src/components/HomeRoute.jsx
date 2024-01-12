import React, { useState } from 'react'
import '../styles/HomeRoute.scss'
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigation';


const HomeRoute = (props) => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);
  
  const handleToggleFavorite = (photoId) => {
    setFavoritePhotos(prevFavorites => {
      const isFavorite = prevFavorites.includes(photoId);
      if (isFavorite) {
        return prevFavorites.filter(id => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  console.log(favoritePhotos)

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favoritePhotos={favoritePhotos}/>
      <PhotoList 
        photos={props.photos} 
        favoritePhotos={favoritePhotos} 
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;