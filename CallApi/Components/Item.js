import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Item = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress = {props.onPress}>
      <Image
        style={styles.images}
        source={props.url ? { uri: props.url } : require('../assets/default.png')}
        resizeMode='stretch' />
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 280,
    height: 200,
  },
  text: {
    fontSize: 22,
    color: '#000',
    marginBottom: 50
  }
});

export default Item;