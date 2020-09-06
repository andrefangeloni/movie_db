import { MoviesActions } from '../actions';

const initialState = {
  topRated: {},
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case MoviesActions.GET_MOVIES_TOP_RATED:
      return {
        ...state,
        topRated: action.payload,
      };
    default:
      return state;
  }
}

export const getTopRated = (state) => state.movies.topRated;
