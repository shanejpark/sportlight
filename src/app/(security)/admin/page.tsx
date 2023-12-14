"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as client from "../../client";
import {
  BsTrash3Fill,
  BsPlusCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
function UserTable() {
  const [users, setUsers] = useState(new Array());
  const [user, setUser] = useState<client.INewUser | any>({});
  const createUser = async () => {
    try {
      let role = 1;
      if (user.role === "ADMIN") role = 0;
      const nUser = { ...user, role: role };
      const newUser = await client.createUser(nUser);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const selectUser = async (user: client.IUser) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user: client.IUser) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
          <tr>
            <td>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="form-control"
              />
            </td>
            <td>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="form-control"
              />
            </td>
            <td>
              <input
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                className="form-control"
              />
            </td>
            <td>
              <input
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className="form-control"
              />
            </td>

            <td>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                className="form-select"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </td>
            <td className="text-nowrap">
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success fs-1 text"
              />
              <BsPlusCircleFill
                onClick={createUser}
                className="text-success fs-1 text"
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link href={`/profile/${user._id}`}>{user.email}</Link>
              </td>
              <td>{user.password}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              {user.role === 0 ? <td>Admin</td> : <td>User</td>}
              <button className="btn btn-warning me-2">
                <BiPencil onClick={() => selectUser(user)} />
              </button>
              <button onClick={() => deleteUser(user)}>
                <BsTrash3Fill />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;
