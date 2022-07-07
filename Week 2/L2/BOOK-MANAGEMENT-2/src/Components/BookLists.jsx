import React from "react";
import { BookCard } from "./BookCard";
import styled from "styled-components";

export const BookLists = ({ books }) => {
  return (
    <>
      {books.length > 0 &&
        books.map((book) => (
          <BookCardWrapper key={book.id}>
            <BookCard bookData={book} />
          </BookCardWrapper>
        ))}
    </>
  );
};

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  text-align: center;
`;
