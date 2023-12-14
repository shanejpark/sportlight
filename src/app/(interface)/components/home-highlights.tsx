"use client";

import HomeHighlight from "./home-highlight";
import { useEffect, useState, useContext } from "react";
import { PageContext } from "@/app/layout";

function HomeHighlights() {
  const [data, setData] = useState<any>(null);
  const params = useContext(PageContext);
  const fetchHighlights = () => {
    const url = `https://basketball-highlights-api.p.rapidapi.com/highlights?season=2023&limit=10${
      params.selectedCountry !== null &&
      params.selectedCountry !== void 0 &&
      params.selectedCountry !== ""
        ? "&countryName=" + params.selectedCountry
        : ""
    }${
      params.selectedLeague !== null &&
      params.selectedLeague !== void 0 &&
      params.selectedLeague !== ""
        ? "&leagueName=" + params.selectedLeague
        : ""
    }`;
    console.log(url);
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "force-cache",
      headers: {
        Accept: "application/json",
        "x-rapidapi-key": "aa1fff7c82msh9d775d577faf9b8p16bed0jsne2743caa5c6a",
        "x-rapidapi-host": "basketball-highlights-api.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  const singleHighlight = (highlight: any) => {
    return <HomeHighlight vUrl={highlight.url} hId={highlight.id} />;
  };

  useEffect(() => {
    fetchHighlights();
  }, [params]);

  return (
    <div>
      <h3 className="bg-light rounded p-2 mb-4">Highlights 📷</h3>
      <div className="container mt-5">
        <div className="mb-3 row d-flex align-items-center justify-content-center">
          {data && data.data.map(singleHighlight)}
        </div>
      </div>

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
