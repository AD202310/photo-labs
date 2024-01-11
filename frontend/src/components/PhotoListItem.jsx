import React from 'react';
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return(
    <div className="PhotoListItem">
    <img src={props.imageSource} />
  </div>
  )
};

export default PhotoListItem;
