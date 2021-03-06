import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";

export const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSortBy = searchParams.getAll("sortBy");
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSortBy[0] || "");
  const location = useLocation();

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
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);

      // dispatch(getBooks({ params: { category } }));
    }
  }, [category, dispatch, setSearchParams, location.search, sortBy]);

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
        <input
          type="radio"
          name="sortBy"
          value="asc"
          defaultChecked={sortBy === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="sortBy"
          value="desc"
          defaultChecked={sortBy === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};
