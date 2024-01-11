import React from 'react';
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return(
    <div className="photo-list__item">
      <img src={props.imageSource} />
    </div>
  )
};

export default PhotoListItem;
