import React from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss'
import HomeRoute from 'components/HomeRoute';
import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';



const App = () => {

  return (
    <HomeRoute photos={mockPhotoData} topics={mockTopicData}/>
  );
};

export default App;
