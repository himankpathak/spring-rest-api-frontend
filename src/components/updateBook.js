import React, { useState } from "react";
import axios from "axios";

const updateBook = async (id, bookName, author) => {
  const response = await axios.put(
    "http://localhost:8080/api/v1/books/" + id,
    {
      bookName: bookName,
      author: author
    },
    {
      params: {
        access_token: localStorage.getItem("access_token")
      }
    }
  );
  return response.status;
};

export default function UpdateBook() {
  const [Id, setId] = useState("");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div>
      <form onSubmit={() => updateBook(Id, bookName, author)}>
        ID:
        <br />
        <input type="text" onChange={e => setId(e.target.value)} required />
        <br />
        Book Name:
        <br />
        <input
          type="text"
          onChange={e => setBookName(e.target.value)}
          required
        />
        <br />
        Author:
        <br />
        <input type="text" onChange={e => setAuthor(e.target.value)} required />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
