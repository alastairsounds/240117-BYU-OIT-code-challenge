import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await fetch(`http://localhost:3000/movies?search=${search}`);
      const data = await response.json();
      // log out the data to make sure it's what you expect
      console.log("data.results:", data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  // TODO: upon successful search, show a list of the returned values
  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <div>
          <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
