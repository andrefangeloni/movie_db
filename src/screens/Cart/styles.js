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
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1%',
  },
  posterAndTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  flatListContainer: {
    marginHorizontal: '2%',
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
  mE5p: {
    marginEnd: '5%',
  },
  noContentContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '50%',
  },
  noContentImage: {
    width: '100%',
    height: '100%',
  },
  payButtonContainer: {
    margin: '3%',
  },
  payButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#076adb',
    backgroundColor: '#076adb',
  },
  payText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  payIcon: {
    position: 'absolute',
    right: '5%',
  },
});

export default styles;
