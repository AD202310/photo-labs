import React from 'react';
import '../styles/HomeRoute.scss'

import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <nav>
        <TopNavigationBar />
      </nav>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;