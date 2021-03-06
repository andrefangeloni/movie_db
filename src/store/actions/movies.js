import { MoviesServices } from '../../services';
import { MoviesSelelectors } from '../../store/reducers';

export const ADD_MOVIE_TO_CART = 'ADD_MOVIE_TO_CART:movies';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE:movies';
export const GET_MOVIE_SEARCHED = 'GET_MOVIE_SEARCHED:movies';
export const GET_MOVIES_TOP_RATED = 'GET_MOVIES_TOP_RATED:movies';

export const getMoviesTopRated = () => {
  return async (dispatch) => {
    try {
      const { results } = await MoviesServices.fetchMoviesTopRated();

      dispatch({ type: GET_MOVIES_TOP_RATED, payload: results });
    } catch (err) {
      throw err;
    }
  };
};

export const getMovieSearched = (query) => {
  const formattedQuery = query && query.replace(' ', '+').trim();

  return async (dispatch) => {
    try {
      if (formattedQuery && formattedQuery.length > 0) {
        const { results } = await MoviesServices.fetchMovieSearched(
          formattedQuery,
        );

        dispatch({ type: GET_MOVIE_SEARCHED, payload: results });
      }
    } catch (err) {
      throw err;
    }
  };
};

export const setSelectedMovie = (selectedMovie) => {
  return (dispatch) => {
    dispatch({ type: SET_SELECTED_MOVIE, payload: selectedMovie });
  };
};

export const addMovieToCart = (addedMovie) => {
  return (dispatch, getState) => {
    const separatedMovies = MoviesSelelectors.getMoviesInCart(getState());

    const duplicateMovie = separatedMovies.find(
      (movie) => movie.id === addedMovie.id,
    );

    if (duplicateMovie) {
      throw new Error('Movie already added!');
    }

    dispatch({
      type: ADD_MOVIE_TO_CART,
      payload: [...separatedMovies, addedMovie],
    });
  };
};

export const removeMovieFromCart = (removedMovie) => {
  return (dispatch, getState) => {
    const separatedMovies = MoviesSelelectors.getMoviesInCart(getState());

    const restMovies = separatedMovies.filter(
      (movie) => movie.id !== removedMovie.id,
    );

    dispatch({ type: ADD_MOVIE_TO_CART, payload: restMovies });
  };
};

export const endShopping = () => {
  return (dispatch) => {
    dispatch({ type: ADD_MOVIE_TO_CART, payload: [] });
  };
};
