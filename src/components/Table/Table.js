// src/components/Table.js
import React from "react";
import "./Table.css";

const Table = ({ movies }) => {
  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Type</th>
          <th>Poster</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.imdbID}>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Type}</td>
            <td>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
