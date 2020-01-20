import React, { useState } from "react";
import axios from "axios";

const deleteBook = async id => {
  const response = await axios.delete(
    "http://localhost:8080/api/v1/books/" + id,

    {
      params: {
        access_token: localStorage.getItem("access_token")
      }
    }
  );
  return response.status;
};

export default function DeleteBook() {
  const [Id, setId] = useState("");
  return (
    <div>
      <form onSubmit={() => deleteBook(Id)}>
        ID:
        <br />
        <input type="text" onChange={e => setId(e.target.value)} required />
        <br />
        <input type="submit" value="Delete" />
      </form>
    </div>
  );
}
