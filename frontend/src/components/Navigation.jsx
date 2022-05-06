import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <Link className="navbar-brand" to="/">
          Dashboard
        </Link>

        <Link className="navbar-brand" to="/ebooks">
          E-Books
        </Link>

        <Link className="navbar-brand" to="/booksale">
          Buy Books
        </Link>
      </div>
      <div>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/books">
          Books
        </Link>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/reviews">
          Reviews
        </Link>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/lists">
          My Lists
        </Link>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/login">
          Login
        </Link>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
