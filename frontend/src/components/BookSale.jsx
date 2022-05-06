import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookSaleSet = () => {
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
    axios.get("http://localhost:8000/booksale").then((res) => {
      const books = res.data;
      console.log(books.data);
      setBooks(books);
    });
  }, []);

  const changeText = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    e.target.innerText = "Added To Cart!";
  }; 

  return (
    <div  style={{color: "white"}}>
      <center>
        <h1>Books For Sale</h1>
      </center>
      <table className="table" style={{color: "white"}}>
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Option</th>
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
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td><button onClick={changeText}>Add To Cart</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookSaleSet;
