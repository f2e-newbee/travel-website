import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "../filter/Filter";
/**
 * 關鍵字搜尋元件
 */

const SearchBar = ({
  keyWord,
  setKeyWord,
  handleSearch,
  type,
  city,
  setCity,
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-40">
        <Filter city={city} setCity={setCity} />
      </div>
      <div className="bg-gray-300 w-full max-w-xs	py-2 px-4 rounded-3xl flex items-center text-white">
        <SearchIcon className="inline-block mr-2" />
        <input
          type="text"
          placeholder="關鍵字搜尋"
          className="font-semibold outline-none bg-transparent placeholder-current"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
      <div>
        {type === "primary" && (
          <button
            className="bg-primary hover:bg-primary-dark py-2 px-6 rounded-3xl text-white font-bold ml-4"
            onClick={() => handleSearch(keyWord)}
          >
            開始搜尋
          </button>
        )}
        {type === "secondary" && (
          <button
            className="bg-secondary hover:bg-secondary-dark py-2 px-6 rounded-3xl text-white font-bold ml-4"
            onClick={() => handleSearch(keyWord)}
          >
            開始搜尋
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
