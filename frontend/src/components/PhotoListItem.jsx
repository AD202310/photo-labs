import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return(
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.photo.imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile} />
        <div className="photo-list__user-info">
          <h4 className="photo-list__user-details">{props.photo.username}</h4>
          <h4 className="photo-list__user-location" >{props.photo.location.city}, {props.photo.location.country}</h4>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
