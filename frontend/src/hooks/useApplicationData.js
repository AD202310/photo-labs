import { useReducer } from 'react';

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  // SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
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
        ...state,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
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
  };

  // Use reducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action to dispatch favorite photo added
  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  // Action to dispatch favorite photo removed
  const removeFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  };

  // Action to dispatch set selected photo
  const setPhotoSelected = (selectedPhoto) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: selectedPhoto });
  };

  // Action to dispatch close photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };


  return {
    state,
    updateToFavPhotoIds,
    removeFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
