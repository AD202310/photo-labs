import React from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss'
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';


const App = () => {

  return (
    <div className="App">
      <nav className="top-nav-bar">
        <TopNavigationBar />
        <TopicList />
        <FavBadge />
      </nav>
      <PhotoList />
    </div>
  );
};

export default App;
