import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1%',
  },
  posterAndTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  poster: {
    marginStart: '2%',
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(14),
  },
  movieTitle: {
    flex: 1,
    marginTop: '2%',
    marginStart: '5%',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  deleteButton: {
    marginEnd: '2%',
  },
});

export default styles;
