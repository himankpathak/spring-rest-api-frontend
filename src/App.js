import React from "react";
import "./App.css";
import { mainAuth } from "./components/auth";
import BookList from "./components/bookList";
import AddBook from "./components/addBook";
import UpdateBook from "./components/updateBook";
import DeleteBook from "./components/deleteBook";

function App() {
  mainAuth();
  return (
    <div className="App">
      <header className="App-header">Sprint Rest API</header>
      <div className="books">
        <div className="pad"></div>
        <div className="booklist">
          <h2>Book List:</h2>
          <BookList />
        </div>
        <div className="pad"></div>
      </div>
      <div className="books">
        <div className="pad">
          <AddBook />
        </div>
        <div className="pad">
          <UpdateBook />
        </div>
        <div className="pad">
          <DeleteBook />
        </div>
      </div>
    </div>
  );
}

export default App;
