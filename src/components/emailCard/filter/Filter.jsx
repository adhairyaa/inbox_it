import React from "react";
import { useDispatch } from "react-redux";
import "./Filter.css";
import { addFilter } from "../../../features/filter/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  return (
    <div className="filters">
      <div className="input-group">
        <p>Filter By:</p>
        <input
          name="filterButton"
          type="radio"
          id="readFilter"
          onClick={() => dispatch(addFilter("IS_READ"))}
        ></input>
        <label for="readFilter">
          <p>Read</p>
        </label>
        <input
          name="filterButton"
          type="radio"
          id="unreadFilter"
          onClick={() => dispatch(addFilter("IS_UNREAD"))}
        ></input>
        <label for="unreadFilter">
          <p>Unreads</p>
        </label>
        <input
          name="filterButton"
          type="radio"
          id="favoriteFilter"
          onClick={() => dispatch(addFilter("FAVORITE"))}
        ></input>
        <label for="favoriteFilter">
          <p>Favorites</p>
        </label>
        <input
          name="filterButton"
          type="radio"
          id="showAllFilter"
          onClick={() => dispatch(addFilter("SHOW_ALL"))}
        ></input>
        <label for="showAllFilter">
          <p>All</p>
        </label>
      </div>
    </div>
  );
}

export default Filter;
