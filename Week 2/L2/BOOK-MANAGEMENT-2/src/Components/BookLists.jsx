import React, { useEffect } from "react";
import { BookCard } from "./BookCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const BookLists = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.appReducer.books);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (books.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy");
      console.log("sortBy", sortBy);

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };

      dispatch(getBooks(getBooksParams));
    }
  }, [location.search]);

  return (
    <>
      {books.length > 0 &&
        books.map((book) => (
          <BookCardWrapper key={book.id}>
            <Link to={`/books/${book.id}`}>
              <BookCard bookData={book} />
            </Link>
          </BookCardWrapper>
        ))}
    </>
  );
};

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  text-align: center;
`;
