import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  main: {
    flex: 1,
    margin: '5%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    width: '80%',
    marginStart: '3%',
    marginBottom: '5%',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  posterContainer: {
    alignSelf: 'center',
    width: '100%',
    height: heightPercentageToDP(40),
  },
  poster: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
