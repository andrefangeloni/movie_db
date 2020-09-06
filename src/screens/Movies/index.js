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

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const Movies = ({ topRated, loadTopRated }) => {
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
          data={topRated && topRated.results}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.poster}
                source={{ uri: `${imageURL}${item.poster_path}` }}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
