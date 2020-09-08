import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: '5%',
  },
});

export default styles;
