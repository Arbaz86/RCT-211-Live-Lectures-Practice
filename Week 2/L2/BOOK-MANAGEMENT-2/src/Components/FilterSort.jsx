import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/Book/action";

export const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSortBy = searchParams.getAll("sortBy");
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSortBy[0] || "");

  const handleCheckbox = (e) => {
    const option = e.target.value;

    //if the option is already present then remove it, else add it
    let newCategory = [...category];

    if (category.includes(option)) {
      //remove part of the category
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add part of the category
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category: category });
      dispatch(getBooks({ params: { category } }));
    }
  }, [category, dispatch, setSearchParams]);

  useEffect(() => {
    if (sortBy) {
      const params = {
        category: searchParams.getAll("category"),
        sortBy,
      };

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: "release_year",
          _order: sortBy,
        },
      };

      dispatch(getBooks(getBooksParams));

      setSearchParams(params);
    }
  }, [sortBy, dispatch, setSearchParams]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          value="Novel"
          onChange={handleCheckbox}
          checked={category.includes("Novel")}
        />
        <label>Novel</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Science_Fiction"
          onChange={handleCheckbox}
          checked={category.includes("Science_Fiction")}
        />
        <label>Science_Fiction</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Motivational"
          onChange={handleCheckbox}
          checked={category.includes("Motivational")}
        />
        <label>Motivational</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Thriller"
          onChange={handleCheckbox}
          checked={category.includes("Thriller")}
        />
        <label>Thriller</label>
      </div>

      <h3>Sort</h3>

      <div
        onChange={handleSortBy}
        checked={sortBy === "desc" || sortBy === "asc"}
      >
        <input type="radio" name="sortBy" value="asc" />
        <label>Ascending</label>
        <input type="radio" name="sortBy" value="desc" />
        <label>Descending</label>
      </div>
    </div>
  );
};
