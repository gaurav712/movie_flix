import * as React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../config/Colors';

const Card = ({ movieItem, navigation, movie }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => {
      movie(movieItem);
      navigation('MovieDetails');
    }}>
    <Image style={styles.cardImage} source={{uri: `https://image.tmdb.org/t/p/w342${movieItem.poster_path}`}} />
    <View style={styles.movieInfo}>
      <Text style={styles.title}>{movieItem.title}</Text>
      <Text style={styles.desc} numberOfLines={5}>
        {movieItem.overview}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.unfocusedLight,
    borderBottomWidth: 1,
  },
  cardImage: {
    flex: 0.25
  },
  movieInfo: {
    flex: 0.65,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 12,
  },
});

export default Card;
