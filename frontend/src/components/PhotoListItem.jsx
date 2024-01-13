import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const handlePhotoClick = () => {
    props.onPhotoClick(props.photo);
  };

  return(
    <div className="photo-list__item">
      <PhotoFavButton
        photo={props.photo}
        isFavorite={props.isFavorite}
        onToggleFavorite={props.onToggleFavorite}
      />
      <img 
        className="photo-list__image" 
        src={props.photo.urls.full} 
        onClick={handlePhotoClick} 
        alt={`Photo by ${props.photo.user.name}` }
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <h4 className="photo-list__user-details">{props.photo.user.name}</h4>
          <h4 className="photo-list__user-location" >{props.photo.location.city}, {props.photo.location.country}</h4>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
