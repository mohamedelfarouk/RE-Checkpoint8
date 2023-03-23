import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import moviesList from "./db/moviesList";

function App() {
  useEffect(() => {
    setMovies(moviesList);
  }, []);

  const handleSearchTitle = (text) => {
    setMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const handleSearchRating = (text) => {
    setMovies(movies.filter((movie) => movie.rating >= parseInt(text)));
  };

  const addNew = (movie) => {
    setMovies((movies) => [
      ...movies,
      {
        id: movies.length + 1,
        title: movie.title,
        desc: movie.desc,
        rating: movie.rating,
        posterURL: `https://loremflickr.com/320/240?random=${
          movies.length + 1
        }`,
      },
    ]);
  };

  const [movies, setMovies] = useState(moviesList);
  return (
    <div>
      <Filter
        handleFilterT={handleSearchTitle}
        handleFilterR={handleSearchRating}
      />
      <MovieList movies={movies} />
      <AddMovie onAdd={addNew} />
    </div>
  );
}

export default App;
