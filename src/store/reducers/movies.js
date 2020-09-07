import { MoviesActions } from '../actions';

const initialState = {
  topRated: {},
  searchedMovie: {},
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
    default:
      return state;
  }
}

export const getTopRated = (state) => state.movies.topRated;

export const getSearchedMovie = (state) => state.movies.searchedMovie;
