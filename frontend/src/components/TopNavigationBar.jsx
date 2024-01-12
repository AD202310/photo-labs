import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const hasFavorites = props.favoritePhotos.length > 0;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge favoritePhotos={props.favoritePhotos} displayAlert={hasFavorites}/>
    </div>
  );
}

export default TopNavigation;