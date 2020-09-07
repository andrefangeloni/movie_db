import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';

import posterNotFound from '../../assets/poster-not-found.jpg';

import constants from '../../data/constants';

import { MoviesSelelectors } from '../../store/reducers';

import { MoviesActions } from '../../store/actions';

import styles from './styles';

const Details = ({ navigation, selectedMovie }) => {
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

        <ScrollView showsVerticalScrollIndicator={false}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
