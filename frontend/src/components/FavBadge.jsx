import React from 'react';
import FavIcon from './FavIcon';
import SunIcon from './SunIcon';
import '../styles/FavBadge.scss';
import MoonIcon from './MoonIcon';


const FavBadge = (
  { dark, 
    setDark, 
    isFavPhotoExist 
  }) => {
  return (
    // Container div for the FavBadge component
    <div className='fav-badge'>
      {/* FavIcon component to display the favorite icon */}
      <FavIcon 
        selected={true} 
        dark={dark}
        displayAlert={!!isFavPhotoExist} 
      />

      {/* Container div for the dark mode button */}
      <div className='dark-mode' onClick={setDark}>
        {/* Conditional rendering of SunIcon or MoonIcon based on dark mode */}
        {dark ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  ) 
};

export default FavBadge;
