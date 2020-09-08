import React from 'react';
import { View, Text, Alert, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import CartCard from '../../components/Cards/Cart';
import NoMovies from '../../components/EmptyState/NoMovies';
import ActionButton from '../../components/Buttons/ActionButton';

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
      <Text style={styles.title}>Cart</Text>

      {moviesInCart.length > 0 ? (
        <FlatList
          data={moviesInCart}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CartCard movie={item} onDelete={() => onRemoveMovie(item)} />
          )}
        />
      ) : (
        <NoMovies />
      )}

      {moviesInCart.length > 0 && (
        <View style={styles.buttonContainer}>
          <ActionButton text="PAY" onPress={() => onPayMovies()} />
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
