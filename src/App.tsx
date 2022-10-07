/* eslint-disable @typescript-eslint/no-unused-vars */
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

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=428d048b";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container">
      <div className="row headerSection">
        <MovieHeadingList>Movie</MovieHeadingList>
        <SearchBox />
      </div>
      <div className="row slide">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
