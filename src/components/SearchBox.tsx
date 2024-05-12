import { memo, useContext, useEffect, useRef } from "react";
import { UserContext } from "../contexts/UserContext";

const SearchBox = ({ onHandleClick, searchText }) => {
  const inputRef = useRef(null);
  const { loggedInUser } = useContext(UserContext);
  console.log("searchBox called");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>{loggedInUser}</div>
      <input
        ref={inputRef}
        type="text"
        className="search-box"
        value={searchText}
        onChange={onHandleClick}
        data-testid="searchInput"
      />
    </>
  );
};

export default memo(SearchBox);
