import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetails.css";

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=14fad9802c00b168a189d37c1f92af26`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="movie_details">
      <div
        className="image_container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})`,
        }}
      >
        <div className="overlay"></div>
      </div>
      <div className="movie-info">
        <h1>{movies.title}</h1>
        <p>{movies.vote_average}</p>
        <p>{movies.overview}</p>
      </div>
      <MarkAsSeenBtn />
    </div>
  );
}

export default MovieDetails;
