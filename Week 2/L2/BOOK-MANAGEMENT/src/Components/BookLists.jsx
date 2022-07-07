import React from "react";
import { BookCard } from "./BookCard";
import styled from "styled-components";

export const BookLists = ({ books }) => {
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
