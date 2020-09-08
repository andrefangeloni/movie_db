import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const ActionButton = ({ text, onPress, cartIcon }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    {cartIcon ? (
      <MCIcons style={styles.icon} name="cart-outline" size={20} color="#fff" />
    ) : (
      <Icon style={styles.icon} name="dollar" size={20} color="#fff" />
    )}
  </TouchableOpacity>
);

export default ActionButton;
