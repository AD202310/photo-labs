import React from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss'
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';



const App = () => {

  return (
    <div className="App">
      <nav className="top-nav-bar">
        <TopNavigationBar />
      </nav>
      <PhotoList />
    </div>
  );
};

export default App;
