import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';


const App = () => {

  return (
    <div className="App">
      <div>
        <TopicList />
      </div>
      <PhotoList />
    </div>
  );
};

export default App;
