import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import "./MovieCard.css";
function MovieCard({ movies }) {
  return (
    <div>
      <div className="moviecard">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt=""
        />
        <h3>{movies.title}</h3>
        <p>{movies.vote_average}</p>
      </div>
      <MarkAsSeenBtn />
    </div>
  );
}

export default MovieCard;
