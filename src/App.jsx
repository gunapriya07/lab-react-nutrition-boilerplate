import React from "react";
import Foodbox from "./Component/Foodbox/Foodbox";
import foodData from "./resources/FoodData";
import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredData = foodData.filter((el) => el.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));
  return (
    <div className="App">
      <h1>Pro Nutrition</h1>
      <div className="search-section">
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search an item."
          onChange={handleSearch}
        />
      </div>
      {filteredData.map((el, i) => (
        <Foodbox data={el} index={i} key={i} />
      ))}
    </div>
  );
};

export default App;