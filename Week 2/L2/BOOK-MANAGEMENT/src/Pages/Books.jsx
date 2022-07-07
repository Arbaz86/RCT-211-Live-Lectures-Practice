import React, { useEffect } from "react";
import { getBooks } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { BookLists } from "../Components/BookLists";
import { FilterSort } from "../Components/FilterSort";
import styled from "styled-components";

export const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  // console.log("books", books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListsWrapper>
          <BookLists books={books} />
        </BookListsWrapper>
      </BookPageWrapper>
    </div>
  );
};

const BookPageWrapper = styled.div`
  display: flex;
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
`;

const BookListsWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap: 10px;
  justify-content: center;
  padding: initial;
`;
