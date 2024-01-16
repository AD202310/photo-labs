import React, { useReducer, useEffect, useState } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotosArray: [...state.favoritePhotosArray, action.payload],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotosArray: state.favoritePhotosArray.filter(
          (id) => id !== action.payload
        ),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state, photoData: action.payload
      };


    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state, topicData: action.payload
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
        isModalOpen: true,
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}


const useApplicationData = () => {
  const initialState = {
    selectedPhoto: null,
    isModalOpen: false,
    favoritePhotosArray: [],
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  const removeFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  };

  const setPhotoSelected = (selectedPhoto) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: selectedPhoto });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

 const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();
      
      // Dispatch an action to set the fetched photos for the topic
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };



  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 



  // Return state and actions
  return {
    state,
    updateToFavPhotoIds,
    removeFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
