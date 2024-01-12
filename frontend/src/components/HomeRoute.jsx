import React, { useState } from 'react'
import '../styles/HomeRoute.scss'
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigation';


const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const handleToggleFavorite = (photoId) => {
    const isFavorite = favoritePhotos.includes(photoId);
    if (isFavorite) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
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