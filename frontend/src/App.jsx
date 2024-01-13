import React, { useState } from 'react';
import './App.scss';
import './styles/TopNavigationBar.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const openModal = (photo) => {

    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicData} 
        onPhotoClick={(photo) => openModal(photo)} 
      />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} />}
    </>
  );
};

export default App;
