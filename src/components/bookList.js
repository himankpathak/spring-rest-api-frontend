import React, { useState } from "react";
import axios from "axios";

const getBooks = async access_token => {
  const response = await axios.get("http://localhost:8080/api/v1/books", {
    params: {
      access_token: localStorage.getItem("access_token")
    }
  });
  return response.data;
};

export default function BookList() {
  const [books, setBooks] = useState([]);
  getBooks().then(res => setBooks(res));

  return (
    <ul style={{ listStyleType: "none" }}>
      {books.map(element => {
        return (
          <li key={element.id}>
            ({element.id}) {element.bookName} - {element.author}
          </li>
        );
      })}
    </ul>
  );
}
