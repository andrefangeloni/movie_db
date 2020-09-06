import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Movies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Movies</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Movies;
