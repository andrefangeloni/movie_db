import React from 'react';
import { View, Image } from 'react-native';

import noMovies from '../../assets/no-movies.png';

import styles from './styles';

const NoMovies = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" style={styles.image} source={noMovies} />
  </View>
);

export default NoMovies;
