import React from "react";
import { BookCard } from "./BookCard";
import styled from "styled-components";
import { useEffect } from "react";
import { getBooks } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";

export const BookLists = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log("books", books);
  console.log("location", location);

  useEffect(() => {
    if (books.length === 0 || location.search) {
      // const [sortBy] = searchParams.get("sortBy");
      // const getBooksParams = {
      //   params: {
      //     category: searchParams.getAll("category"),
      //     _sort: "release_year",
      //     _order: sortBy,
      //   },
      // };

      dispatch(getBooks());
    }
  }, [location.search]);

  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          return (
            <BookCardWrapper key={singleBook.id}>
              <BookCard bookData={singleBook} />
            </BookCardWrapper>
          );
        })}
    </>
  );
};

const BookCardWrapper = styled.div`
  border: 1px solid blue;
`;
