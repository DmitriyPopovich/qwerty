import React from "react";
import SearchInputContainer from "../../containers/search-input-container";
import ItemStatusFilterContainer from "../../containers/item-status-filter-container";
import "./search-box.css";

const SearchBox = () => {
  return (
    <div className="top-panel d-flex s_box" data-testid="main-div-searchbox">
      <SearchInputContainer />
      <ItemStatusFilterContainer />
    </div>
  );
};
export default SearchBox;
