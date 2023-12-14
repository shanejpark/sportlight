"use client";

import HomeHighlight from "./home-highlight";
import { useEffect, useState } from "react";

function HomeHighlights() {
  const [data, setData] = useState(null);

  // const fetchHighlights = () => {
  //   fetch(
  //     "https://basketball-highlights-api.p.rapidapi.com/highlights?limit=10&countryCode=US",
  //     {
  //       method: "GET", // *GET, POST, PUT, DELETE, etc.
  //       cache: "force-cache",
  //       headers: {
  //         Accept: "application/json",
  //         "x-rapidapi-key":
  //           "aa1fff7c82msh9d775d577faf9b8p16bed0jsne2743caa5c6a",
  //         "x-rapidapi-host": "basketball-highlights-api.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchHighlights();
  // }, []);
  return (
    <div>
      <h4>Highlights</h4>
      <HomeHighlight
        vUrl="https://www.youtube.com/embed/7ciRTP90E2E"
        hId="26"
      />
      {/* <div className="row mt-5 ms-5 me-5">
        {data &&
          data.data.map((highlight: any) => {
            <HomeHighlight vUrl={highlight.url} id={highlight.id} />;
          })}
      </div> */}
    </div>
  );
}

export default HomeHighlights;
