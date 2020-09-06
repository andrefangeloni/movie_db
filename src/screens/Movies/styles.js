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
    paddingBottom: '20%',
  },
  poster: {
    marginStart: '5%',
    overflow: 'visible',
    width: widthPercentageToDP(28),
    height: heightPercentageToDP(21),
  },
  itemSeparator: {
    height: '1%',
  },
});

export default styles;
