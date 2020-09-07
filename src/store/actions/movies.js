import { MoviesServices } from '../../services';

export const GET_MOVIE_SEARCHED = 'GET_MOVIE_SEARCHED:movies';
export const GET_MOVIES_TOP_RATED = 'GET_MOVIES_TOP_RATED:movies';

export const getMoviesTopRated = () => {
  return async (dispatch) => {
    try {
      const topRated = await MoviesServices.fetchMoviesTopRated();

      dispatch({ type: GET_MOVIES_TOP_RATED, payload: topRated });
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
        const searchedMovie = await MoviesServices.fetchMovieSearched(
          formattedQuery,
        );

        dispatch({ type: GET_MOVIE_SEARCHED, payload: searchedMovie });
      }
    } catch (err) {
      throw err;
    }
  };
};
