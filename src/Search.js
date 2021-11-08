import logo from "./logo.svg";
import "./App.css";
// import { SearchInput, Button } from "react-onsenui";
import React, { useState } from "react";
import config from "./config";
import BookCard from './bookCard'

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async (event) => {
    event.preventDefault();
    console.log("searching");
    const url = `${config.apiUrl}/search?q=${query}`;

    try {
      console.log(query);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBooks(data.result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchBooks}>
        <label className="label" htmlFor="query">
          Поиск книг:
        </label>
        <input
          className="input"
          type="text"
          placeholder="Пример: Оруэлл 1984"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {books.map((book) => (
          <BookCard book={book} key={book.BookID}/>
          
        ))}
      </div>
    </>
  );
}
