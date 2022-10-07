import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieHeadingList from "./components/MovieHeadingList";
import SearchBox from "./components/SearchBox";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState("avengers");

  const getMovieRequest = async (searchValue: string) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=428d048b`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container">
      <div className="row headerSection">
        <MovieHeadingList>Movie</MovieHeadingList>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row slide">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
