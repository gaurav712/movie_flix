import * as React from 'react';

import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

export default function App() {
  
  const [currentScreen, setCurrentScreen] = React.useState('Home');
  const [movie, setMovie] = React.useState();

  /* To save the current navigation state for Home */
  const [currentSection, setCurrentSection] = React.useState('nowPlaying');

  return (
    <>
      {currentScreen === 'Home' ? (
        <Home
          navigation={setCurrentScreen}
          movie={setMovie}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      ) : (
        <MovieDetails navigation={setCurrentScreen} movie={movie} />
      )}
    </>
  );
}
