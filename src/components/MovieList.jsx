import { useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  useEffect(() => {
    console.log(movies);
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
