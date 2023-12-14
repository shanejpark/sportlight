"use client";

import * as client from "../../../client";
import ProfileHeader from "../../components/profileHeader";
import Button from "react-bootstrap/Button";
import VertFavoriteList from "../../components/vertFavoriteList";
import { useState, useEffect } from "react";
import { IUser } from "../../../client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import HomeHighlight from "../../components/home-highlight";

export default function UserProfile() {
    const router = useRouter()

    const { id } = useParams();
    const [account, setAccount] = useState<IUser>();
    const [user, setUser] = useState<IUser>();
    const [highlights, setHighlights] = useState<any>([]);

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id: String) => {
        const user = await client.findUserById(id);
        setUser(user);
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
            });
    };

    const getHighlights = () => {
        if (user) {
            const highlightIds = user.highlights;
            highlightIds?.map(async (id: Number) => await fetchHighlightById(id));
        }
    }

    const follow = async () => {
        if (account && user) {
            account.following.push(user._id);
            user.followers.push(account._id);
            await client.updateUser(user);
            await client.updateUser(account); // Have to update logged in account after because server implementation
        } else {
            router.push('/signin')
        }
    };

    const unfollow = async () => {
        if (account && user) {
            account.following = account.following.filter((usrId) => usrId !== user._id)
            user.followers = user.followers.filter((usrId) => usrId !== account._id)
            await client.updateUser(user);
            await client.updateUser(account); // Have to update logged in account after because server implementation
        } else {
            router.push('/signin')
        }
    };


    useEffect(() => {
        fetchAccount();
        findUserById(id as String);
    }, [account, id, user]);

    useEffect(() => {
        getHighlights();
    }, [user]);

    const singleHighlight = (highlight: any) => {
        return (<HomeHighlight vUrl={highlight.url} hId={highlight.id} />)
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex mt-5 ms-5 bg-light me-5 pt-4 pb-4 rounded">
                <ProfileHeader />
                <div className="w-25 float-end me-3">
                    {
                        account?.following.includes(user?._id as String) ?
                            <Button variant="outline-dark" onClick={unfollow}>
                                Unfollow
                            </Button> :
                            <Button variant="outline-dark" onClick={follow}>
                                + Follow
                            </Button>
                    }
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