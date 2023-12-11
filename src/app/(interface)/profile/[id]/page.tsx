"use client";

import * as client from "../../../client";
import ProfileHeader from "../../components/profileHeader";
import Button from "react-bootstrap/Button";
import CardDeck from "../../components/cardDeck";
import VertFavoriteList from "../../components/vertFavoriteList";
import { useState, useEffect } from "react";
import { IUser } from "../../../client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function UserProfile() {
    const router = useRouter()

    const { id } = useParams();
    const [account, setAccount] = useState<IUser>();
    const [user, setUser] = useState<IUser>();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id : String) => {
        const user = await client.findUserById(id);
        setUser(user);
    };

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

    return (
        <div className="d-flex flex-column">
            <div className="d-flex mt-5 ms-5">
                <ProfileHeader />
                <div className="w-25 float-end">
                    {
                        account?.following.includes(user?._id as String) ?
                            <Button variant="outline-secondary" onClick={unfollow}>
                                Unfollow
                            </Button> :
                            <Button variant="outline-secondary" onClick={follow}>
                                + Follow
                            </Button>
                    }
                </div>
            </div >
            <div className="d-flex flex-column align-items-center mt-5 bg-light ms-5 me-5 pt-3 rounded">
                <h4>Favorite Matches</h4>
                <CardDeck />
            </div>

            <div className="d-flex flex-column align-items-center mt-5 bg-light ms-5 me-5 pt-3 rounded">
                <h4>Favorite Highlights</h4>
                <CardDeck />
            </div>

            <div className="d-flex ms-5 me-5 mt-5 mb-3">
                <VertFavoriteList title="Leagues" />
                <VertFavoriteList title="Teams" />
            </div>
        </div>
    )
}