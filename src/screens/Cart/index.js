import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Money from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import noMovies from '../../assets/no-movies.png';
import posterNotFound from '../../assets/poster-not-found.jpg';

import constants from '../../data/constants';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Cart = ({ navigation, moviesInCart, removeMovie, endShopping }) => {
  const onPayMovies = () => {
    endShopping();
    navigation.navigate('Movies');
  };

  const onRemoveMovie = (movie) => {
    Alert.alert('Warning', 'Are you sure?', [
      {
        text: 'Yes',
        onPress: () => removeMovie(movie),
      },
      {
        text: 'No',
        onPress: () => {},
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {console.log(moviesInCart)}
      <Text style={styles.title}>Cart</Text>

      {moviesInCart.length > 0 ? (
        <FlatList
          data={moviesInCart}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <View style={styles.posterAndTitle}>
                {item.poster_path ? (
                  <Image
                    style={styles.poster}
                    source={{ uri: `${constants.imageURL}${item.poster_path}` }}
                  />
                ) : (
                  <Image style={styles.poster} source={posterNotFound} />
                )}

                <Text style={styles.movieTitle}>{item.title}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onRemoveMovie(item)}>
                <Icon name="delete" size={30} color="#a30000" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.noContentContainer}>
          <Image
            resizeMode="contain"
            style={styles.noContentImage}
            source={noMovies}
          />
        </View>
      )}

      {moviesInCart.length > 0 && (
        <View style={styles.payButtonContainer}>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => onPayMovies()}>
            <Text style={styles.payText}>PAY</Text>
            <Money
              style={styles.payIcon}
              name="dollar"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  moviesInCart: MoviesSelelectors.getMoviesInCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  endShopping: (movies) => dispatch(MoviesActions.endShopping(movies)),
  removeMovie: (movie) => dispatch(MoviesActions.removeMovieFromCart(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
