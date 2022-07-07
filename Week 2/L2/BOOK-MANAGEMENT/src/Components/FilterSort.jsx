import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBooks } from "../Redux/action";

export const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.getAll("sortBy");
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSort[0] || "");

  const handleCheckbox = (e) => {
    const option = e.target.value;
    //if the option is already present then remove it, else add it
    let newCategory = [...category];
    if (category.includes(option)) {
      // remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  console.log(sortBy);

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

      console.log(getBooksParams);

      setSearchParams(params);
    }
  }, [sortBy, dispatch, setSearchParams]);

  console.log(category);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Novel"
            checked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Thriller"
            checked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Motivational"
            checked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};
