"use client";

import * as client from "../../client";
import HomePerson from "./home-person";
import React, { useState, useEffect } from "react";

function HomePeople() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        let users = await client.findAllUsers();
        let account = await fetchAccount();
        if (account) {
            users = users.filter((user: any) => user._id !== account._id)
        }
        setUsers(users);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        return account;
    };

    useEffect(() => { fetchUsers(); }, []);

    return (
        <div>
            <h4>People</h4>
            <div className="d-flex justify-content-center container mt-5">
                <div className="d-flex flex-wrap w-100">
                    {users.map((user: client.IUser) => (
                        <HomePerson key={user._id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default HomePeople;