import React from "react";
import { useDispatch } from "react-redux";
import "./Filter.css";
import {
  favoritesFilter,
  unreadFilter,
  readFilter,
} from "../../../features/filter/filterSlice";

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
          onClick={dispatch(readFilter())}
        ></input>
        <label for="readFilter">
          <p>Read</p>
        </label>
        <input
          name="filterButton"
          type="radio"
          id="unreadFilter"
          onClick={dispatch(unreadFilter())}
        ></input>
        <label for="unreadFilter">
          <p>Unreads</p>
        </label>
        <input
          name="filterButton"
          type="radio"
          id="favoriteFilter"
          onClick={dispatch(favoritesFilter())}
        ></input>
        <label for="favoriteFilter">
          <p>Favorites</p>
        </label>
      </div>
    </div>
  );
}

export default Filter;
