import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    axios
      .get("http://localhost:5000/api/books/list-books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="container pt-5">
        {books.map((book, _id) => (
          <div key={book._id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                {book.description.slice(0, 120) + "..."}
              </p>
              <Link to={`/book/${book._id}`} className="btn btn-success">
                Read Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
