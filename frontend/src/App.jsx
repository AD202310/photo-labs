import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {

  const photos = Array.from({ length: 3 });

  return (
    <div className="App">
      {photos.map((_, index) => (
        <PhotoListItem
          key={index}
          city={sampleDataForPhotoListItem.location.city}
          country={sampleDataForPhotoListItem.location.country}
          imageSource={sampleDataForPhotoListItem.imageSource}
          username={sampleDataForPhotoListItem.username}
          profile={sampleDataForPhotoListItem.profile}
        />
      ))}
    </div>
  );
};

export default App;
