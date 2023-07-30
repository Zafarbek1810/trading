import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../HHTP/clients";

const Rating = ({ id }) => {
  const [brokerRating, setBrokerRating] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/brokers/report/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setBrokerRating(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    function getArrayAverage(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum / arr.length;
    }
    setAverage(getArrayAverage(brokerRating.map((rating) => rating.rating)));
  }, [brokerRating]);

  return (
    <div className="box">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          // onClick={() => handleStarClick(value)}
          style={{
            cursor: "pointer",
            color: value <= average ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
