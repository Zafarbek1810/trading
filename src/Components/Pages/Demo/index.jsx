import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [rating, setRating] = useState(0); // Initial rating is 0

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://apilayer.net/api/live?access_key=f6e9c870312f2ff030fe4de7a1eeb1dc&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        // setAds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleStarClick(value)}
          style={{
            cursor: "pointer",
            color: value <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default Demo;
