"use client";

import * as client from "../../client";
import Link from "next/link";
import ProfileHeader from "../components/profileHeader";
import Button from "react-bootstrap/Button";
import { MdOutlineEdit } from "react-icons/md";
import VertFavoriteList from "../components/vertFavoriteList";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HomeHighlight from "../components/home-highlight";

export default function Profile() {
    const { id } = useParams();
    const [highlights, setHighlights] = useState<any>([]);
    const [account, setAccount] = useState<client.IUser>();

    const findUserById = async (id: any) => {
        const user = await client.findUserById(id);
        setAccount(user);
        getHighlights();
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const fetchHighlightById = async (id: Number) => {
        fetch(
            `https://basketball-highlights-api.p.rapidapi.com/highlights/${id}`,
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
                setHighlights((highlights: any) => [...highlights, data[0]]);
                console.log(highlights)
            });
    };

    const getHighlights = () => {
        if (account) {
            const highlightIds = account.highlights;
            highlightIds?.map(async (id: Number) => await fetchHighlightById(id));
        }
    }

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    useEffect(() => {
        getHighlights();
    }, [account]);

    const singleHighlight = (highlight: any) => {
        return (<HomeHighlight vUrl={highlight.url} hId={highlight.id} />)
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex mt-5 ms-5 bg-light me-5 pt-4 pb-4 rounded">
                <ProfileHeader />
                <div className="w-25 float-end me-3">
                    <Link href="/profile/edit">
                        <Button variant="outline-dark">
                            <MdOutlineEdit />
                            Edit Profile
                        </Button>
                    </Link>
                </div>
            </div >
            {/* <div className="d-flex flex-column align-items-center mt-5 bg-light ms-5 me-5 pt-3 rounded">
                <h4>Favorite Matches</h4>

                <CardDeck />
            </div> */}

            {highlights.length > 0 &&
                <div className="d-flex flex-column align-items-center mt-5 bg-light ms-5 me-5 pt-4 rounded">
                    <h4>Favorite Highlights</h4>
                    <div className="container mt-3">
                        <div className="mb-3 row d-flex align-items-center justify-content-center">
                            {highlights.map((highlight: any) => singleHighlight(highlight))}
                        </div>
                    </div>
                    {/* <CardDeck /> */}
                </div>
            }

            <div className="d-flex ms-5 me-5 mt-5 mb-3">
                <VertFavoriteList title="Leagues" />
                <VertFavoriteList title="Teams" />
            </div>
        </div>
    )
}