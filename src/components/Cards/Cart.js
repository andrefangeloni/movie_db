import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import posterNotFound from '../../assets/poster-not-found.jpg';

import constants from '../../data/constants';

import styles from './styles';

const CartCard = ({ movie, onDelete }) => (
  <View style={styles.container}>
    <View style={styles.posterAndTitle}>
      {movie.poster_path ? (
        <Image
          style={styles.poster}
          source={{ uri: `${constants.imageURL}${movie.poster_path}` }}
        />
      ) : (
        <Image style={styles.poster} source={posterNotFound} />
      )}

      <Text style={styles.movieTitle}>{movie.title}</Text>
    </View>

    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Icon name="delete" size={30} color="#a30000" />
    </TouchableOpacity>
  </View>
);

export default CartCard;
