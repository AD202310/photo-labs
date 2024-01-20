import React, { useReducer, useEffect, useState } from 'react';

// Initial state for the application
const INITIAL_STATE = {
  likes: [],
  selectedPhoto: null,
  selectedTopic: null,
  modal: false,
  photoData: [],
  topicData: [],
  dark: ''
};

// Action types for the reducer
const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE'
};

// Reducer function to manage state changes based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LIKE:
      const photoId = action.payload;
      if (state.likes.includes(photoId)) {
        return { ...state, likes: state.likes.filter(id => id !== photoId) };
      };
      return { ...state, likes: [...state.likes, photoId] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, modal: true, selectedPhoto: action.payload };

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload };

    case ACTIONS.CLOSE_PHOTO:
      return { ...state, modal: false, selectedPhoto: null };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.TOGGLE_DARK_MODE:
      if (state.dark === 'dark') {
        return { ...state, dark: '' };
      }
      return { ...state, dark: 'dark' };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

// Custom hook for managing application state
export const useApplicationData = () => {
  // useReducer hook to manage state using the reducer function
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Function to fetch all photos
  const getAllPhotos = () => {
    fetch(`/api/photos`)
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
  };

  // useEffect hook to fetch all photos once when the component mounts
  useEffect(() => {
    getAllPhotos();
  }, []);

  // useEffect hook to fetch all topics once when the component mounts
  useEffect(() => {
    fetch(`/api/topics`)
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }));
  }, []);

  // useEffect hook to fetch photos based on the selected topic
  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => res.json())
        .then(photosByTopic => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosByTopic }));
    }
  }, [state.selectedTopic]);

  // Functions to dispatch actions for various state changes
  const updateToFavPhotoIds = photoId => dispatch({ type: ACTIONS.TOGGLE_LIKE, payload: photoId });
  const setPhotoSelected = photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  const getPhotosByTopic = topicId => dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicId });
  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO });
  const setDark = () => dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });

  // Return the state and functions for state management
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    getAllPhotos,
    onClosePhotoDetailsModal,
    setDark
  };
};
