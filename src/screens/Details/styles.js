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
  flexGrow: {
    flexGrow: 1,
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
  releaseText: {
    marginTop: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  fS18: {
    fontSize: 18,
  },
  overviewText: {
    flex: 1,
    marginTop: '5%',
    marginBottom: '10%',
    fontSize: 16,
    textAlign: 'justify',
    color: '#fff',
  },
});

export default styles;
