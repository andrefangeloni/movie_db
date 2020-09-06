import { MoviesServices } from '../../services';

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
