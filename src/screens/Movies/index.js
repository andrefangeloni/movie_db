import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import posterNotFound from '../../assets/poster-not-found.jpg';

import constants from '../../data/constants';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Movies = ({ navigation, topRated, loadTopRated, setSelectedMovie }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    onLoadTopRated();
  }, [onLoadTopRated]);

  const onLoadTopRated = React.useCallback(async () => {
    try {
      setIsLoading(true);
      await loadTopRated();
    } catch (err) {
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [loadTopRated]);

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Movies</Text>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          numColumns={3}
          key={(item) => String(item.id)}
          data={topRated}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectedMovie(item)}>
              <Image
                resizeMode="contain"
                style={styles.poster}
                source={
                  item.poster_path
                    ? {
                        uri: `${constants.imageURL}${item.poster_path}`,
                      }
                    : posterNotFound
                }
              />
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  topRated: MoviesSelelectors.getTopRated(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadTopRated: () => dispatch(MoviesActions.getMoviesTopRated()),
  setSelectedMovie: (selectedMovie) =>
    dispatch(MoviesActions.setSelectedMovie(selectedMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
