import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ActionButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    <Icon style={styles.icon} name="dollar" size={20} color="#fff" />
  </TouchableOpacity>
);

export default ActionButton;
