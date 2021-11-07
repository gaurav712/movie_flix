import * as React from 'react';
import { ScrollView } from 'react-native';

import MovieCard from './MovieCard';

export default function TopRated({ navigation, movie, searchQuery }) {
  const [movies, setMovies] = React.useState([]);

  /* Fetch data from the API */
  fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed'
  )
    .then((res) => res.json())
    .then((resJSON) => {
      setMovies(resJSON.results);
    });

  /* Filter based on the query */
  const filtered = movies.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <ScrollView>
      {filtered.map((movieItem) => (
        <MovieCard
          key={movieItem.id}
          movieItem={movieItem}
          navigation={navigation}
          movie={movie}
        />
      ))}
    </ScrollView>
  );
}
