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

import posterNotFound from '../../assets/404-not-found.jpg';

import constants from '../../data/constants';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Search = ({ searchedMovie, searchMovie }) => {
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
            <TouchableOpacity onPress={() => {}}>
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
          <View style={styles.loadingContainer}>
            <Text style={styles.noContent}>Search Movie</Text>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
