import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <div className="filters">
      <div className="input-group">
        <p>Filter By:</p>
        <input name="filterButton" type="radio" id="readFilter"></input>
        <label for="readFilter">
          <p>Read</p>
        </label>
        <input name="filterButton" type="radio" id="unreadFilter"></input>
        <label for="unreadFilter">
          <p>Unreads</p>
        </label>
        <input name="filterButton" type="radio" id="favoriteFilter"></input>
        <label for="favoriteFilter">
          <p>Favorites</p>
        </label>
      </div>
    </div>
  );
}

export default Filter;
