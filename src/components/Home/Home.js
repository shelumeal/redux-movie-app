import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";

function Home() {
  useEffect(() => {
    const moveText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${moveText}&type=movie`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("Error :", err);
        });
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
