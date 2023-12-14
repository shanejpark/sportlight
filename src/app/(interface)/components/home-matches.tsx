"use client";

import HomeMatch from "./home-match";
import { useEffect, useState } from "react";

function HomeMatches() {
  const [data, setData] = useState<any>(null);

  const fetchMatches = () => {
    fetch(
      "https://basketball-highlights-api.p.rapidapi.com/matches?limit=10&countryCode=US",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        cache: "force-cache",
        headers: {
          Accept: "application/json",
          "x-rapidapi-key":
            "aa1fff7c82msh9d775d577faf9b8p16bed0jsne2743caa5c6a",
          "x-rapidapi-host": "basketball-highlights-api.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  const singleMatch = (match : any) => {
    return (<HomeMatch imgUrl={match.league.logo} mId={match.id} />)
  }

  useEffect(() => {
    fetchMatches();
  }, []);


  return (
    <div>
      <h3 className='bg-light rounded p-2 mb-4'>Matches 🏆</h3>
      <div className="container mt-5">
                <div className="mb-3 row d-flex align-items-center justify-content-center">
                {data && data.data.map(singleMatch)}
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
export default HomeMatches;