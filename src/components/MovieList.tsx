import { Movie } from "../App";

const MovieList = (props: { movies: Movie[] }) => {
  return (
    <>
      {props.movies.map((item) => (
        <div key={item.Poster} className="card">
          <img src={item.Poster} alt="Poster" />
        </div>
      ))}
    </>
  );
};

export default MovieList;
