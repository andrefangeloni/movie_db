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
  searchContainer: {
    marginHorizontal: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '90%',
    height: 40,
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: '#fff',
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
  noContent: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
