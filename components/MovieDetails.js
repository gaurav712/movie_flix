import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

import Colors from '../config/Colors';

export default function MovieDetails({ navigation, movie }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.backgroundLight}/>
      <ImageBackground
        style={styles.cover}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        }}
        resizeMode="cover">
        <TouchableOpacity
          onPress={() => {
            navigation('Home');
          }}>
          <View style={styles.backNavContainer}>
            <Svg
              height={28}
              viewBox="0 0 24 24"
              width={28}
              fill={Colors.focusedLight}>
              <Path d="M0 0h24v24H0z" fill="none" />
              <Path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </Svg>
            <Text style={styles.homeNav}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.release_date}>🗓  {movie.release_date}</Text>
            <Text style={styles.vote_average}>👑 {movie.vote_average}%</Text>
          </View>
          <Text style={styles.desc}>{movie.overview}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backNavContainer: {
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    backgroundColor: Colors.backgroundLight,
  },
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.backgroundLight,
  },
  cover: {
    flex: 1,
    justifyContent: 'space-between',
  },
  desc: {
    color: Colors.infoForegroundLight,
    fontSize: 16,
  },
  homeNav: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    padding: 12,
    margin: 24,
    backgroundColor: Colors.infoBackgroundLight,
    borderRadius: 16,
  },
  release_date: {
    fontSize: 16,
    color: Colors.infoForegroundLight,
    paddingBottom: 12,
    paddingLeft: 8,
  },
  title: {
    color: Colors.infoForegroundLight,
    fontWeight: 'bold',
    fontSize: 32,
    paddingBottom: 12,
  },
  vote_average: {
    paddingLeft: 32,
    color: Colors.infoForegroundLight,
    fontSize: 16,
  },
});
