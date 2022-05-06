import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookSet = () => {
  const [books, setBooks] = useState([]);

  /*
  const onDelete = (id) => {
    axios
      .delete(`problem/delete/${id}`)
      .then((res) => {
        axios.get("http://localhost:8080/problem/view").then((res) => {
          const questions = res.data;
          setProblems(questions.data);
        });
      })
      .catch((err) => console.log(err));
  };
  */

  useEffect(() => {
    axios.get("http://localhost:8000/books").then((res) => {
      const books = res.data;
      console.log(books.data);
      setBooks(books);
    });
  }, []);

  const changeStatus = (e) => {
    e.preventDefault();
    if(e.target.innerText = "Not Borrowed")
      e.target.innerText = "Borrowed";
  }; 

 return (
    <div style={{color: "white"}}>
      <center>
        <h1>Book List</h1>
      </center>
      <table className="table" style={{color: "white"}}>
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Title</th>
            <th scope="col">Summary</th>
            <th scope="col">Status</th>
          </tr>
        </thead> 
        <tbody>
          {books && books.map((book, index) => {
            return (
              <tr key={book.isbn}>
                <th>{index + 1}</th>
                <td>
                    {book.title}
                </td>
                <td>{book.summary}</td>
                <td><button id="status" onClick={changeStatus}>{book.status}</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookSet;
