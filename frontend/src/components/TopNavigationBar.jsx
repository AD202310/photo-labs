import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  const displayAlert = props.favoritePhotosArray.length > 0;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge favoritePhotos={props.favoritePhotosArray} displayAlert={displayAlert}/>
    </div>
  );
}

export default TopNavigationBar;