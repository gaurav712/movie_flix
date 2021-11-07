import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Svg, Path } from 'react-native-svg';

import NowPlaying from './NowPlaying';
import TopRated from './TopRated';

import Colors from '../config/Colors';

export default function Home({
  navigation,
  movie,
  currentSection,
  setCurrentSection,
}) {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.backgroundLight}/>
      <View>
        <SearchBar
          placeholder="Search Movies"
          value={query}
          onChangeText={setQuery}
          style={styles.searchBar}
          inputContainerStyle={styles.searchBar}
          containerStyle={styles.searchContainer}
        />
      </View>
      {currentSection === 'nowPlaying' ? (
        <NowPlaying navigation={navigation} movie={movie} searchQuery={query} />
      ) : (
        <TopRated navigation={navigation} movie={movie} searchQuery={query} />
      )}
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButtonContainer}
          onPress={() => setCurrentSection('nowPlaying')}>
          <Svg
            height={28}
            viewBox="0 0 24 24"
            width={28}
            fill={
              currentSection === 'nowPlaying'
                ? Colors.focusedLight
                : Colors.unfocusedLight
            }>
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
          </Svg>
          <Text
            style={{
              color:
                currentSection === 'nowPlaying'
                  ? Colors.focusedLight
                  : Colors.unfocusedLight,
            }}>
            Now Playing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonContainer}
          onPress={() => setCurrentSection('topRated')}>
          <Svg
            height={28}
            viewBox="0 0 24 24"
            width={28}
            fill={
              currentSection === 'topRated'
                ? Colors.focusedLight
                : Colors.unfocusedLight
            }>
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </Svg>
          <Text
            style={{
              color:
                currentSection === 'topRated'
                  ? Colors.focusedLight
                  : Colors.unfocusedLight,
            }}>
            Top Rated
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    //paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.backgroundLight,
  },
  navButtonContainer: {
    alignItems: 'center',
  },
  navContainer: {
    padding: 15,
    borderTopColor: Colors.foregroundLight,
    borderTopWidth: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  searchBar: {
    backgroundColor: Colors.backgroundSecondaryLight,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
