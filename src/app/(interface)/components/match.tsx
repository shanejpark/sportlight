"use client";

import * as client from "../../client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { IUser } from "../../client";

function Match({ d }: any) {
  const router = useRouter();
  const [account, setAccount] = useState<IUser>();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

  const dateStringToUS = (dateString: string) => {
    const dateObject = new Date(dateString);
    // Format the date
    return dateObject.toLocaleDateString("en-US");
  };

  const addLeague = async () => {
    if (account) {
      account.leagues.push(d.league.id);
      await client.updateUser(account);
    } else {
      router.push("/signin");
    }
  };

  const removeLeague = async () => {
    if (account) {
      account.leagues = account.leagues.filter(
        (lId) => lId !== d.league.id
      );
      await client.updateUser(account);
    } else {
      router.push("/signin");
    }
  };

  const addHomeTeam = async () => {
    if (account) {
      account.teams.push(d.homeTeam.id);
      await client.updateUser(account);
    } else {
      router.push("/signin");
    }
  };

  const addAwayTeam = async () => {
    if (account) {
      account.teams.push(d.awayTeam.id);
      await client.updateUser(account);
    } else {
      router.push("/signin");
    }
  };

  const removeHomeTeam = async () => {
    if (account) {
      account.teams = account.teams.filter(
        (tId) => tId !== d.homeTeam.id
      );
      await client.updateUser(account);
    } else {
      router.push("/signin");
    }
  };

  const removeAwayTeam = async () => {
    if (account) {
      account.teams = account.teams.filter(
        (tId) => tId !== d.awayTeam.id
      );
      await client.updateUser(account);
    } else {
      router.push("/signin");
    }
  };

  useEffect(() => {
    fetchAccount();
}, [account]);

  return (
    <div className="container w-75">
      <div className="row d-flex ms-5 me-5">
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src={d.country.logo}
            width="300"
            height="200"
            alt="flag"
            className="img-thumbnail"
          />
          <div className="ms-4">
            <p>{d.country.code}</p>
            <p>{d.stage!}</p>
            <p>{d.week}</p>
            <p>{dateStringToUS(d.date)}</p>
          </div>
        </div>

        <div className="col-lg d-flex align-items-center mb-5 ms-5">
          <Image
            src={d.league.logo}
            alt="league"
            width="200"
            height="200"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <p>{d.league.name}</p>
            <p>{d.league.season}</p>
            {account && account.leagues.includes(parseInt(d.league.id || "")) ? (
                    <Button
                        variant="outline-dark"
                        onClick={removeLeague}
                    >
                        Unfavorite
                    </Button>
                ) : (
                    <Button
                        variant="outline-dark"
                        onClick={addLeague}
                    >
                        Favorite
                    </Button>
                )}
          </div>
        </div>
      </div>

      <div className="row mt-5 ms-5 me-5">
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src={d.homeTeam.logo}
            width="200"
            height="200"
            alt="home-team"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <h4>Home Team</h4>
            <p>{d.homeTeam.name}</p>
            {account && account.teams.includes(parseInt(d.homeTeam.id || "")) ? (
                    <Button
                        variant="outline-dark"
                        onClick={removeHomeTeam}
                    >
                        Unfavorite
                    </Button>
                ) : (
                    <Button
                        variant="outline-dark"
                        onClick={addHomeTeam}
                    >
                        Favorite
                    </Button>
                )}
          </div>
        </div>
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src={d.awayTeam.logo}
            width="200"
            height="200"
            alt="away-team"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <h4>Away Team</h4>
            <p>{d.awayTeam.name}</p>
            {account && account.teams.includes(parseInt(d.awayTeam.id || "")) ? (
                    <Button
                        variant="outline-dark"
                        onClick={removeAwayTeam}
                    >
                        Unfavorite
                    </Button>
                ) : (
                    <Button
                        variant="outline-dark"
                        onClick={addAwayTeam}
                    >
                        Favorite
                    </Button>
                )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
