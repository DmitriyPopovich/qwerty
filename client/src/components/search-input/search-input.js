import React from "react";
import "./search-input.css";
import PropTypes from "prop-types";

const SearchInput = (props) => {
  const { term, onChange } = props;
  return (
    <input
      data-testid="input-search"
      value={term}
      onChange={onChange}
      placeholder="search"
    />
  );
};
SearchInput.propTypes = {
  term: PropTypes.string,
  onChange: PropTypes.func
};
SearchInput.defaultProps = {
  term: "",
  onChange: (e) => console.log(e.target.value)
};
export default SearchInput;
