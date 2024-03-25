import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
  } from "./action";
  
  const initialState = {
    books: [],
    loading: false,
    error: null
  };
  // bjjljk
  
  function booksReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_BOOKS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_BOOKS_SUCCESS:
        const sortedBooks = action.payload.sort((a, b) => a.title.localeCompare(b.title));
        return { ...state, books: sortedBooks, loading: false };
      case FETCH_BOOKS_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  }
  
  export default booksReducer;
  
