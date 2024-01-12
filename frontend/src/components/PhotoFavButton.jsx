import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isPressed, setPressed] = useState(true);

  const handleButtonClick = () => {
    setPressed(!isPressed);
  };

  return (
    <div className={`photo-list__fav-icon`} onClick={handleButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isPressed}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;