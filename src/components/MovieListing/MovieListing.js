import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  return <div>Movie Listing</div>;
}

export default MovieListing;
