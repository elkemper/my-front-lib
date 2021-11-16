import React, { useState } from "react";
import config from "./config";
import BookCard from './bookCard'

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const searchBooks = async (event) => {
    event.preventDefault();
    console.log("searching");
    setLoading(true)
    setBooks([])
    const url = `${config.apiUrl}/search?q=${query}`;

    try {
      console.log(query);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setLoading(false)
      setBooks(data.result);
    } catch (e) {
      console.error(e);
      setLoading(false)

    }
  };

  const Loading = ()=>{
    return (<div><h4 className='loading-bar'>Loading</h4></div>)
  }

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
      {isLoading ? <Loading/> : null}
      <div className="card-list">
        {books.map((book) => (
          <BookCard book={book} key={book.BookID}/>
          
        ))}
      </div>
    </>
  );
}
