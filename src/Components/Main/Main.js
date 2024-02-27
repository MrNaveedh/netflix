import React from "react";
import requests from "../Api/requests";
import Row from "../RowComponent/Row";
import { useSearch } from "../../Context/SearchContext";
import Banner from "../Banner/Banner";
import Nav from "../Nav";
let rows = [
  {
    className: "sizeInc",
    title: "NETFLIX ORIGINALS",
    url: requests.fetchNetflixOriginals,
  },
  { className: "sizeDec", title: "Trending", url: requests.fetchTrending },
  { className: "sizeDec", title: "Top Rated", url: requests.fetchTopRated },
  {
    className: "sizeDec",
    title: "Action Movies",
    url: requests.fetchActionMovies,
  },
  {
    className: "sizeDec",
    title: "Comedy Movies",
    url: requests.fetchComedyMovies,
  },
  {
    className: "sizeDec",
    title: "Horror Movies",
    url: requests.fetchHorrorMovies,
  },
  {
    className: "sizeDec",
    title: "Romance Movies",
    url: requests.fetchRomanceMovies,
  },
  {
    className: "sizeDec",
    title: "Documentaries",
    url: requests.fetchDocumentaries,
  },
];

function Main() {
  const { flag } = useSearch();

  return flag ? (
    <div></div>
  ) : (
    <div>
      <Nav />
      <Banner />
      {rows.map((row) => (
        <Row className={row.className} title={row.title} url={row.url} />
      ))}
    </div>
  );
}

export default Main;
