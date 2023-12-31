"use client";

import * as client from "../../client";
import Button from "react-bootstrap/Button";
import Match from "../components/match";
import { useState, useEffect, use } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IUser } from "../../client";

export default function HighlightDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();
    const [newData, setData] = useState<any>();
    const [account, setAccount] = useState<IUser>();

    const [vid, setVid] = useState<any>(null);

    const fetchVideoEmbed = async () => {
        fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(newData[0].url)}&format=json`)
            .then((res) => res.json())
            .then((data) => {
                setVid(data.html);
                console.log(data);
            });
    }
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const fetchHighlight = async () => {
        fetch(`https://basketball-highlights-api.p.rapidapi.com/highlights/${id}`, {
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

    const addHighlight = async () => {
        if (account) {
            account.highlights.push(parseInt(id || ""));
            await client.updateUser(account);
        } else {
            router.push("/signin");
        }
    };

    const removeHighlight = async () => {
        if (account) {
            account.highlights = account.highlights.filter(
                (hId) => hId !== parseInt(id || "")
            );
            await client.updateUser(account);
        } else {
            router.push("/signin");
        }
    };

    useEffect(() => {
        fetchHighlight();
    }, []);

    useEffect(() => {
        fetchAccount();
    }, [account]);

    useEffect(() => {
        console.log(newData);
    }, [newData]);

    useEffect(() => {
        fetchVideoEmbed();
    }, [newData, vid]);

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex mt-5 align-items-center mb-5">
                <h1 className="me-auto invisible">Highlight</h1>
                <h1>{newData && newData[0].title}</h1>
                {account && account.highlights.includes(parseInt(id || "")) ? (
                    <Button
                        variant="outline-dark"
                        className="ms-5"
                        onClick={removeHighlight}
                    >
                        Unfavorite
                    </Button>
                ) : (
                    <Button
                        variant="outline-dark"
                        className="ms-5"
                        onClick={addHighlight}
                    >
                        Favorite
                    </Button>
                )}
            </div>

            <div className="w-75 mb-5">
                <h3>Description: {newData && (newData[0].description ? "" : "No description available")}</h3>
            </div>

            {newData && <Match d={newData[0].match} />}

            <div className='mt-3'>
                    {vid ? <div dangerouslySetInnerHTML={{ __html: vid.replace(/width="[0-9]+"/, 'width="600"').replace(/height="[0-9]+"/, 'height="400"') }} /> : <div className='text-center'>Unable to load preview</div>}
                </div>
        </div>
    );
}
