import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
const Book = () => {
  const [bookDetails, setBookDetails] = useState({});

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  const { id } = useParams();
  const fetchBookDetails = () => {
    axios
      .get(`http://localhost:5000/api/books/find-book/${id}`)
      .then((response) => {
        console.log(response);
        setBookDetails(response.data);
        console.log(bookDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1>
          Book Name: <span className="book-name-text">{bookDetails.title}</span>
        </h1>
      </div>
      <nav className="navBox">
        <button className="bookbutton previous" onClick={goToPrevPage}>
          Prev
        </button>
        <button className="bookbutton next" onClick={goToNextPage}>
          Next
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>
      <div className="App-header">
        <Document
          file={`http://localhost:5000/${bookDetails.files[0].filePath}`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
};

export default Book;
