import { useEffect, useState } from "react";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Link, useSearchParams } from "react-router-dom";

// "https://api.themoviedb.org/3/movie/popular?"

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useSearchParams({ filter: "popular" });
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filter.get(
        "filter"
      )}?api_key=14fad9802c00b168a189d37c1f92af26`
    );
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [filter]);

  return (
    <div>
      <div className="filter">
        <h4>Filter Movies</h4>
        <FilterDropDown filter={filter.get("filter")} setFilter={setFilter} />
      </div>
      <h2>
        {filter.get("filter") === "top_rated"
          ? "Top Rated"
          : filter.get("filter")}{" "}
        movies
      </h2>
      <div className="movielist">
        {movies.map((movies) => (
          <Link key={movies.id} to={`/${movies.id}`}>
            <MovieCard key={movies.id} movies={movies} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
