import React from "react";
import SearchIcon from "@mui/icons-material/Search";

/**
 * 關鍵字搜尋元件
 */
<<<<<<< HEAD
const SearchBar = () => {
  return (
    <div className="flex">
      <div className="bg-grey py-2 px-4 rounded-3xl flex items-center text-white">
=======


const SearchBar = (props) => {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-gray-300 w-full max-w-xs	py-2 px-4 rounded-3xl flex items-center text-white">
>>>>>>> feature/homepage
        <SearchIcon className="inline-block mr-2" />
        <input
          type="text"
          placeholder="關鍵字搜尋"
          className="font-semibold outline-none bg-transparent placeholder-current"
        />
      </div>
<<<<<<< HEAD
      <button className="bg-primary py-2 px-6 rounded-3xl text-white font-bold ml-4">
        開始搜尋
      </button>
=======
      {props.type === 'primary' &&
        <button className="bg-primary hover:bg-primary-dark py-2 px-6 rounded-3xl text-white font-bold ml-4">
        開始搜尋
      </button>
      }
      {props.type === 'secondary' &&
        <button className="bg-secondary hover:bg-secondary-dark py-2 px-6 rounded-3xl text-white font-bold ml-4">
        開始搜尋
      </button>
      }
>>>>>>> feature/homepage
    </div>
  );
};

export default SearchBar;
