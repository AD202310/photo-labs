import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritePhotos }) => {
  if (!favoritePhotos) {
    return <div>Error: favoritePhotos is undefined</div>;
  }
  const hasFavorites = favoritePhotos.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon selected={hasFavorites} />
    </div>
  );
};

export default FavBadge;