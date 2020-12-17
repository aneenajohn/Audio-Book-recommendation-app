import React, { useState } from "react";
import { push } from "./data";
import "./styles.css";

const audioBooks = require("./data");
const genreList = [
  "All Genre",
  "Magical Realism",
  "Classic",
  "Self Development",
  "Mystery",
  "Biography",
  "Horror",
  "Fantasy"
];

export default function App() {
  var [genre, setGenre] = useState("All Genre");
  function fetchSelectedGenre(genre) {
    // console.log("you clicked: ",genre);
    setGenre(genre);
  }
  return (
    <div className="App">
      <header>
        <h1>Audio Book Recommendations</h1>
      </header>
      <hr />
      <div>
        {genreList.map((genre) => (
          <ul className="genre-container">
            <button
              className="genre-list"
              onClick={() => fetchSelectedGenre(genre)}
            >
              {genre}
            </button>
          </ul>
        ))}
      </div>
      <section>
        <div className="grid">
          {audioBooks.map((books) => {
            if (genre === "All Genre") {
              return (
                <div>
                  <img className="book-image" src={books.cover} alt="" />
                  <div className="info">
                    <h3>
                      Book title: <span>{books.bookName}</span>
                    </h3>
                    <h4>
                      Author: <span>{books.author}</span>
                    </h4>
                    <h4>
                      Narrator: <span>{books.narrator}</span>
                    </h4>
                    <h3>
                      Genre: <span>{books.genre}</span>
                    </h3>
                    <button className="knowmore">
                      <a href={books.link} target="_blank" rel="noreferrer">
                        Know more
                      </a>
                    </button>
                  </div>
                </div>
              );
            } else if (books.genre.includes(genre)) {
              return (
                <div className="book-container">
                  <img className="book-image" src={books.cover} alt="" />
                  <div className="book-info">
                    <h3 key={books.bookName}>
                      Book title: <span>{books.bookName}</span>
                    </h3>
                    <h4 key={books.bookName}>
                      Author: <span>{books.author}</span>
                    </h4>
                    <h4 key={books.bookName}>
                      Narrator: <span>{books.narrator}</span>
                    </h4>
                    <h4 key={books.bookName}>
                      Genre: <span>{books.genre}</span>
                    </h4>
                    <button className="knowmore">
                      <a
                        key={books.bookName}
                        href={books.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Know more
                      </a>
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
      <footer>
        Disclaimer: All the books mentioned here are available in audible with a
        free trail of 30days.
      </footer>
    </div>
  );
}
