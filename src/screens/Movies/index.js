import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Movies = ({ topRated, loadTopRated }) => {
  React.useEffect(() => {
    onLoadTopRated();
  }, [onLoadTopRated]);

  const onLoadTopRated = React.useCallback(async () => {
    try {
      await loadTopRated();
    } catch (err) {
      Alert.alert(err.message);
    }
  }, [loadTopRated]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Movies</Text>
      </TouchableOpacity>
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
