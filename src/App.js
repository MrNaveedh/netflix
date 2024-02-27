import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Row from "./Components/RowComponent/Row";
import requests from "./Components/Api/requests";
import Main from "./Components/Main/Main";
import { SearchProvider } from "./Context/SearchContext";
import SearchResults from "./Components/SearchResult/SearchResult";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Nav />
        <Main />
        <SearchResults />
      </SearchProvider>
    </div>
  );
}

export default App;
