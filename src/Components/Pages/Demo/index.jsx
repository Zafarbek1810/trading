import axios from "axios";
import React, { useEffect, useState } from "react";
// import ReactTradingviewWidget, { Themes } from  "react-tradingview-widget";

const Demo = () => {
  const [dataObject, setDataObject] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fcsapi.com/api-v3/stock/history?id=13&period=5m&access_key=9NRLacyHP67pfp7gEwcrNLI`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setDataObject(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {/* <TradingViewChart data={dataObject} /> */}
    </div>
  );
};

export default Demo;


// const TradingViewChart = ({ data }) => {
//   console.log(data);
//   // Extract the data from the object
//   const seriesData = Object.values(data).map((item) => ({
//     time: new Date(item.tm).getTime(),
//     open: parseFloat(item.o),
//     high: parseFloat(item.h),
//     low: parseFloat(item.l),
//     close: parseFloat(item.c),
//     volume: parseFloat(item.v),
//   }));

//   // Define the chart options
//   const chartOptions = {
//     symbol: data.info.symbol,
//     theme: Themes.DARK, // Change this to Themes.LIGHT for a light theme
//     interval: "5", // Interval in minutes
//     container_id: "tradingview-chart",
//     datafeed: {
//       // You can implement a custom data feed here if you have a live data source
//       // For this example, we'll use static data from the `seriesData`
//       bars: seriesData,
//       onReady: (callback) => {
//         setTimeout(() => callback(seriesData), 0);
//       },
//     },
//   };

//   return <ReactTradingviewWidget {...chartOptions} />;
// };