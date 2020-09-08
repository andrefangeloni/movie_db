import { MoviesActions } from '../actions';

const initialState = {
  topRated: [],
  searchedMovie: [],
  selectedMovie: {},
  moviesInCart: [],
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case MoviesActions.GET_MOVIES_TOP_RATED:
      return {
        ...state,
        topRated: action.payload,
      };
    case MoviesActions.GET_MOVIE_SEARCHED:
      return {
        ...state,
        searchedMovie: action.payload,
      };
    case MoviesActions.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case MoviesActions.ADD_MOVIE_TO_CART:
      return {
        ...state,
        moviesInCart: action.payload,
      };
    default:
      return state;
  }
}

export const getTopRated = (state) => state.movies.topRated;

export const getSearchedMovie = (state) => state.movies.searchedMovie;

export const getSelectedMovie = (state) => state.movies.selectedMovie;

export const getMoviesInCart = (state) => state.movies.moviesInCart;
