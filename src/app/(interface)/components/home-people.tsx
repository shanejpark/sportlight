"use client";

import * as client from "../../client";
import { IUser } from "../../client";
import HomePerson from "./home-person";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/esm/Button';
import { useRouter } from 'next/navigation'

function HomePeople() {
    const router = useRouter()

    const [users, setUsers] = useState([]);
    const [account, setAccount] = useState<IUser>();
    const [refetch, setRefetch] = useState(true);

    const fetchUsers = async () => {
        const account = await client.account();

        let users = await client.findAllUsers();
        if (account) {
            users = users.filter((user: any) => user._id !== account._id)
            users = users.filter((user: any) => !account.following.includes(user._id))
        }
        setUsers(users);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const follow = async (user: IUser) => {
        if (account) {
            account.following.push(user._id);
            user.followers.push(account._id);
            await client.updateUser(user);
            await client.updateUser(account); // Have to update logged in account after because server implementation
            setRefetch(!refetch)
        } else {
            router.push('/signin')
        }
    };

    useEffect(() => {
        fetchAccount();
        fetchUsers();
    }, [refetch]);

    return (
        <div>
            <h3 className="bg-light rounded p-2">People 👥</h3>
            <div className="container mt-5">
                <div className="mb-3 row">
                    {users.map((user: client.IUser) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="col-lg-4 d-flex flex-column align-items-stretch mb-4">
                            <HomePerson user={user} />
                            <div className='d-flex justify-content-center mt-3'>
                                <Button variant="dark"  size="sm" onClick={() => follow(user)}>+ Follow</Button>{' '}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default HomePeople;