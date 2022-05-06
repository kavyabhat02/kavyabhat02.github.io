import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import BookSet from "./components/BookSet";
import Signup from "./components/Signup";
//import axios from "axios";
import React from "react";
import EBookSet from "./components/Ebooks";
import BookSaleSet from "./components/BookSale";
import MyLists from "./components/MyLists";
import Reviews from "./components/Reviews";

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/books" element={<BookSet />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/ebooks" element={<EBookSet />} />
        <Route exact path="/booksale" element={<BookSaleSet />} />
        <Route exact path="/lists" element={<MyLists />} />
        <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;