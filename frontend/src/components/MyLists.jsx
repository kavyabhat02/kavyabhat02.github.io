import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/LoginForm.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyLists = () => {
  const [lists, listBooks] = useState([]);

  var loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/lists").then((res) => {
      const lists = res.data;
      console.log(lists);
      listBooks(lists);
    });
  }, []);

  return (
    <div style={{color: "white"}}>
      <center>
        <h1>My Lists</h1>
      </center>
      <table className="table" style={{color: "white"}}>
        <thead>
          <tr>
            <th scope="col">List Name</th>
            <th scope="col">Title</th>
            <th scope="col">ISBN</th>
          </tr>
        </thead>
        <tbody>
          {lists && lists.map((book, index) => {
            if(loggedInUser.user.id == book.customer_id_id)
            {
            return (
              <tr key={book.isbn_id}>
                <td>
                    {book.listName}
                </td>
                <td>{book.title}</td>
                <td>{book.isbn_id}</td>
              </tr>
            );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyLists;
