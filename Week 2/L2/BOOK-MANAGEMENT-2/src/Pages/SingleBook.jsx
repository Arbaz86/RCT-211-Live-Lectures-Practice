import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";

export const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.appReducer.books);
  const [currentBook, setCurrentBook] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, [books?.length, dispatch]);

  useEffect(() => {
    if (id) {
      let temp = books.find((book) => book.id === +id);
      temp && setCurrentBook(temp);
    }
  }, [books, id]);

  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          width="200"
          height="200"
        />
        <h2>{currentBook.book_name}</h2>
        <div>{currentBook.category}</div>
        <div>{currentBook.release_year}</div>
      </div>
      <button>
        <Link to={`/books/${currentBook.id}/edit`}>Edit</Link>
      </button>
    </div>
  );
};
