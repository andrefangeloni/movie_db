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
  fS16: {
    fontSize: 16,
  },
  overviewText: {
    flex: 1,
    marginTop: '5%',
    marginBottom: '10%',
    fontSize: 16,
    textAlign: 'justify',
    color: '#fff',
  },
  cartButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#076adb',
    backgroundColor: '#076adb',
  },
  cartText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  cartIcon: {
    position: 'absolute',
    right: '5%',
  },
});

export default styles;
