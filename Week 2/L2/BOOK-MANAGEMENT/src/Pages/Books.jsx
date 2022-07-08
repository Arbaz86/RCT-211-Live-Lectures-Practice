import React from "react";

import { BookLists } from "../Components/BookLists";
import { FilterSort } from "../Components/FilterSort";
import styled from "styled-components";

export const Books = () => {
  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListsWrapper>
          <BookLists />
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
