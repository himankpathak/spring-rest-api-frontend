import React, { useState } from "react";
import axios from "axios";

const addBook = async (bookName, author) => {
  const response = await axios.post(
    "http://localhost:8080/api/v1/books",
    {
      bookName: bookName,
      author: author,
    },
    {
      params: {
        access_token: localStorage.getItem("access_token"),
      },
    }
  );
  return response.status;
};

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div>
      <h4>Add Book:</h4>
      <form onSubmit={() => addBook(bookName, author)}>
        Book Name:
        <br />
        <input
          type="text"
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <div style={{ padding: "10px" }} />
        Author:
        <br />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <div style={{ padding: "10px" }} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
