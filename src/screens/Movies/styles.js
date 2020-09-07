import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    marginBottom: '5%',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    marginHorizontal: '2%',
    paddingBottom: '12%',
  },
  poster: {
    marginStart: '2%',
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(23),
  },
  itemSeparator: {
    height: '0.5%',
  },
});

export default styles;
