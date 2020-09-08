import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const Header = ({ text, onGoBack }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
      <Icon name="arrowleft" size={30} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default Header;
