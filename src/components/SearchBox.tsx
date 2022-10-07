import React from "react";

interface SearchType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({ searchValue, setSearchValue }: SearchType) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        placeholder="Movie search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
