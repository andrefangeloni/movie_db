import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  Keyboard,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';

import noMovies from '../../assets/no-movies.png';
import posterNotFound from '../../assets/poster-not-found.jpg';

import constants from '../../data/constants';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Search = ({
  navigation,
  searchMovie,
  searchedMovie,
  setSelectedMovie,
}) => {
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onMovieSearch = async () => {
    Keyboard.dismiss();

    try {
      setIsLoading(true);
      await searchMovie(search);
    } catch (err) {
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Search</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="search movie"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        <TouchableOpacity onPress={() => onMovieSearch()}>
          <Feather name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {!isLoading &&
      searchedMovie &&
      searchedMovie.results &&
      searchedMovie.results.length > 0 ? (
        <FlatList
          numColumns={3}
          key={(item) => String(item.id)}
          data={searchedMovie.results}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectedMovie(item)}>
              {item.poster_path ? (
                <Image
                  style={styles.poster}
                  source={{ uri: `${constants.imageURL}${item.poster_path}` }}
                />
              ) : (
                <Image style={styles.poster} source={posterNotFound} />
              )}
            </TouchableOpacity>
          )}
        />
      ) : (
        !isLoading && (
          <View style={styles.noContentContainer}>
            <Image
              resizeMode="contain"
              style={styles.noContentImage}
              source={noMovies}
            />
          </View>
        )
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  searchedMovie: MoviesSelelectors.getSearchedMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (query) => dispatch(MoviesActions.getMovieSearched(query)),
  setSelectedMovie: (selectedMovie) =>
    dispatch(MoviesActions.setSelectedMovie(selectedMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
