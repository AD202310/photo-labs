import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(props.isFavorite);

  const handleButtonClick = () => {
    setSelected(!selected);
    props.onToggleFavorite(props.photo.id);
  };

  return (
    <div className={`photo-list__fav-icon`} onClick={handleButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;