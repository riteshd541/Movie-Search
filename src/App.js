// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchField from "./components/Search bar/SearchField";
import Table from "./components/Table/Table";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchTerm.trim() !== "") {
          const response = await axios.get(
            ` https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`
          );
          if (response.data.Search) {
            setMovies(response.data.Search);
          } else {
            setMovies([]);
          }
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="app-container">
      <Navbar />
      <SearchField onSearchChange={setSearchTerm} />
      <Table movies={movies} />
    </div>
  );
};

export default App;
