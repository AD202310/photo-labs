import { useState } from 'react';

const useApplicationData = () => {

  const initialState = {
    selectedPhoto: null,
    isModalOpen: false,
    favoritePhotosArray: [],
  };

  // State to manage the application
  const [state, setState] = useState(initialState);

  // Action to update favorite photo ids
  const updateToFavPhotoIds = (newFavoritePhotosArray) => {
    setState((prevState) => ({
      ...prevState,
      favoritePhotosArray: newFavoritePhotosArray,
    }));
  };

  // Action to set selected photo
  const setPhotoSelected = (selectedPhoto) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto,
      isModalOpen: true
    }));
  };

  // Action to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
      isModalOpen: false,
    }));
  };


  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
