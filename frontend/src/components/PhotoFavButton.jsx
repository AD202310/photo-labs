import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isPressed, setPressed] = useState(props.isFavorite);

  const handleButtonClick = () => {
    setPressed(!isPressed);
    props.onToggleFavorite(props.photo.id);
  };

  return (
    <div className={`photo-list__fav-icon`} onClick={handleButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isPressed} />
      </div>
    </div>
  );
}

export default PhotoFavButton;