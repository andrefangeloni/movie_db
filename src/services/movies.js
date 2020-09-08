import api from './api';
import { API_KEY } from '../../env.json';

export const fetchMoviesTopRated = async () => {
  const { data } = await api.get(`/movie/top_rated?api_key=${API_KEY}&page=2`);

  return data;
};

export const fetchMovieSearched = async (query) => {
  const { data } = await api.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`,
  );

  return data;
};
