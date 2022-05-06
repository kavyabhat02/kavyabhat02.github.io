import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const EBookSet = () => {
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
    axios.get("http://localhost:8000/ebooks").then((res) => {
      const books = res.data;
      console.log(books.data);
      setBooks(books);
    });
  }, []);

  return (
    <div  style={{color: "white"}}>
      <center>
        <h1>E-Book List</h1>
      </center>
      <br></br>
      <table className="table"  style={{color: "white"}}>
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Hyperlink</th>
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
                <td><a style={{color:"#86c5d8"}} href={book.hyperlink}><b>Read here</b></a></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EBookSet;
