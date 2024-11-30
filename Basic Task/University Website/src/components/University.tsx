import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option: </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={{ padding: "8px", border: "1px solid #ccc", cursor: "pointer" }}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected: {selectedOption || "None"}</p>
    </div>
  );
}

export default Dropdown;
