import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    console.log(input);
  };

  return (
    <div className="search-bar">
      <div>
        <input type="text" placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
