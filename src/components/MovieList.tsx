import { Movie } from "../App";
import AddFavorite from "./addFavorite";

const MovieList = (props: { movies: Movie[] }) => {
  return (
    <>
      {props.movies.map((item) => (
        <div key={item.Poster} className="card image-container">
          <img src={item.Poster} alt="Poster" />
          <div className="overlay d-flex align-items-center justify-content">
            <AddFavorite />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
