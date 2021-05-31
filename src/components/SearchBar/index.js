import React from "react";
import "./style.css";

const SearchBar = (props) => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Enter Search Here"
        />
      </form>
      <p className="text-center">
        Search Employee Directory by Entering Search Here.
      </p>
      <p className="text-center">
        You can also sort the searched data by clicking the column header you wish to sort by.
      </p>
    </header>
  );
};

export default SearchBar;