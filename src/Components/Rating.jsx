import React, { useState } from "react";

function StarRating({
  count,
  value,
  inactiveColor = "#0000",
  size = 22,
  activeColor = "black",
  onChange,
}) {
  
  const stars = Array.from({ length: count }, () => "☆");


  const handleChange = (value) => {
    onChange(value + 1);
  };

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={"star"}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
      {value}
    </div>
  );
}

function StarRatingDemo() {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const [rating, setRating] = useState(0);

  const handleChange = (value) => {
    setRating(value);
  };
  return (
    <div>
      <StarRating
        count={5}
        size={40}
        value={rating}
        activeColor={"black"}
        inactiveColor={"#ddd"}
        onChange={handleChange}
      />
    </div>
  );
}

export default StarRatingDemo;