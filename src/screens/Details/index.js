import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import posterNotFound from '../../assets/poster-not-found.jpg';

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
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{selectedMovie.title}</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.flexGrow}
          showsVerticalScrollIndicator={false}>
          <View style={styles.posterContainer}>
            {selectedMovie.poster_path ? (
              <Image
                resizeMode="contain"
                style={styles.poster}
                source={{
                  uri: `${constants.imageURL}${selectedMovie.poster_path}`,
                }}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={styles.poster}
                source={posterNotFound}
              />
            )}
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

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => onAddMovieToCart()}>
            <Text style={styles.cartText}>ADD TO CART</Text>
            <Icon
              style={styles.cartIcon}
              name="cart-outline"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
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
