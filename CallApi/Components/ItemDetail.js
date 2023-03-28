import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ItemDetail = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress = {props.onPress}>
      <Image
        style={styles.images}
        source={props.url ? { uri: props.url } : require('../assets/default.png')}
        resizeMode='stretch' />
      <Text style={styles.text}>{props.name}</Text>
      <Text style ={styles.text}>{props.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 300,
    height: 250,
    marginTop:20
  },
  text: {
    fontSize: 22,
    color: '#333',
    marginBottom: 50
  }
});

export default ItemDetail;