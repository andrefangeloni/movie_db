import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Main = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text>Main</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
