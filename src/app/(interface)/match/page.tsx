"use client";

import * as client from "../../client";
import Button from "react-bootstrap/Button";
import Match from "../components/match";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { IUser } from "../../client";
import { useRouter } from "next/navigation";


export default function MatchDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();
    const [newData, setData] = useState<any>();
    const [account, setAccount] = useState<IUser>();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const fetchMatch = async () => {
        fetch(`https://basketball-highlights-api.p.rapidapi.com/matches/${id}`, {
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
            });
    };

    const addMatch = async () => {
        if (account) {
            account.matches.push(parseInt(id || ""));
            await client.updateUser(account);
        } else {
            router.push("/signin");
        }
    };

    const removeMatch = async () => {
        if (account) {
            account.matches = account.matches.filter(
                (mId) => mId !== parseInt(id || "")
            );
            await client.updateUser(account);
        } else {
            router.push("/signin");
        }
    };

    useEffect(() => {
        fetchMatch();
    }, []);

    useEffect(() => {
        fetchAccount();
    }, [account]);

    useEffect(() => {
        console.log(newData);
    }, [newData]);

    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex mt-5 align-items-center mb-5">
                    <h1 className="me-auto invisible">Match</h1>
                    <h1>Match</h1>
                </div>
            </div>
            {newData && <Match d={newData[0]}/>}
        </div>
    )
}