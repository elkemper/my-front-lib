import React from "react";
import config from "./config";

export default function BookCard(props) {
  const { book } = props;
  
  const url = `${config.apiUrl}/books/${book.BookID}/Download`
  const dowloadBook = async  (bookId) =>{
    await fetch(url)
  }
  return (
    <div className="card">
      <div className="card--content">
        <h3 className="card--title">{book.Title}</h3>
        <p>
          <small>
            Author:{" "}
            {book.FirstName + " " + book.MiddleName + " " + book.LastName}
          </small>
        </p>
          <small>Language: {book.Lang}</small>
          <a href = {url}>

        <button className = 'button--download' onClick={dowloadBook}>Dowload</button>
          </a>
      </div>
    </div>
  );
}
