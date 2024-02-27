/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "../Api/axios";
import requests from "../Api/requests";
import { useState, useEffect } from "react";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const API_KEY = "6df8374a778c0c13eae866e9ab848884";
const base_url = "https://image.tmdb.org/t/p/original";
function Row({ className, title, url }) {
  let [movies, setMovie] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  let [trailer, setTrailer] = useState("");

  const handleClick = (movie) => {
    if (trailer) setTrailer("");
    else {
      movieTrailer(movie.name || movie.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => {
          alert("There isnt any Trailer for this");
        });
    }
  };

  const opts = {
    height: "350",
    width: "750",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((item) => {
          return (
            <img
              className={className}
              src={`${base_url}${item.poster_path}`}
              onClick={() => handleClick(item)}
            />
          );
        })}
      </div>
      <div className="youtube">
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
