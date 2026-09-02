import { IoSearch } from "react-icons/io5";
function SearchBox() {
  return (
    <div className="searchBox position-relative d-flex align-items-center">
      <IoSearch />
      <input type="text" placeholder="Search Here..." />
    </div>
  );
}

export default SearchBox;
