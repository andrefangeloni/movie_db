import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';

import posterNotFound from '../../assets/poster-not-found.jpg';

import Header from '../../components/Header';
import ActionButton from '../../components/Buttons/ActionButton';

import constants from '../../data/constants';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Details = ({ navigation, selectedMovie, addMovieToCart }) => {
  const onAddMovieToCart = () => {
    try {
      addMovieToCart(selectedMovie);
      navigation.goBack();
      navigation.navigate('Cart');
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Header
          text={selectedMovie.title}
          onGoBack={() => navigation.goBack()}
        />

        <ScrollView
          contentContainerStyle={styles.flexGrow}
          showsVerticalScrollIndicator={false}>
          <View style={styles.posterContainer}>
            <Image
              resizeMode="contain"
              style={styles.poster}
              source={
                selectedMovie.poster_path
                  ? {
                      uri: `${constants.imageURL}${selectedMovie.poster_path}`,
                    }
                  : posterNotFound
              }
            />
          </View>

          {selectedMovie.release_date.length > 0 && (
            <Text style={styles.releaseText}>
              {'Release: '}
              <Text style={styles.fS18}>
                {selectedMovie.release_date.substring(0, 4)}
              </Text>
            </Text>
          )}

          <Text style={styles.overviewText}>{selectedMovie.overview}</Text>

          <ActionButton
            text="ADD TO CART"
            onPress={() => onAddMovieToCart()}
            cartIcon
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: MoviesSelelectors.getSelectedMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (query) => dispatch(MoviesActions.getMovieSearched(query)),
  addMovieToCart: (movie) => dispatch(MoviesActions.addMovieToCart(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
