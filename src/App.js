import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import moviesList from "./db/moviesList";

function App() {
  const [searchTextR, setSearchTextR] = useState("0");
  const [searchTextT, setSearchTextT] = useState("");
  const [movies, setMovies] = useState(moviesList);

  // useEffect(() => {}, [searchTextR, searchTextT]);

  const handleSearchTitle = (text) => {
    setMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const handleFilter = (movies) => {
    return movies
      .filter((movie) => {
        console.log(movie);
        return movie.title.toLowerCase().includes(searchTextT.toLowerCase());
      })
      .filter((movie) => movie.rating >= parseInt(searchTextR));
  };

  const handleSearchRating = (text) => {
    // setMovies(movies.filter((movie) => movie.rating >= parseInt(text)));
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

  return (
    <div>
      <Filter
        handleFilterT={handleSearchTitle}
        handleFilterR={handleSearchRating}
        searchTextR={searchTextR}
        searchTextT={searchTextT}
        setSearchTextR={setSearchTextR}
        setSearchTextT={setSearchTextT}
      />
      <MovieList movies={handleFilter(movies)} />
      <AddMovie onAdd={addNew} />
    </div>
  );
}

export default App;
