"use client";

import * as client from "../client";
import React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
function Signup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    _id: -1,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    role: client.UserType.User,
  });
  const createUser = async () => {
    try {
      await client.createUser(user);
      router.push("/account");
    } catch (err: any) {
      setShowError(true);
      setError(err.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <div className="form-group mt-4">
        <label>Email address</label>
        <input
          className="form-control mt-2 mb-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="form-group mt-2">
        <label>Password</label>
        <input
          className="form-control mt-2 mb-2"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="form-group mt-2">
        <label>First Name</label>
        <input
          className="form-control mt-2 mb-2"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </div>
      <div className="form-group mt-2">
        <label>Last Name</label>
        <input
          className="form-control mt-2 mb-2"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </div>
      <div className="form-group mt-2">
        <label>Date of Birth</label>
        <input
          type="date"
          className="form-control mt-2 mb-2"
          value={user.dob}
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
        />
      </div>
      <button className="btn btn-primary mt-4" onClick={createUser}>
        Signup
      </button>
      {showError ? <ErrorMessage message={error} /> : null}
    </div>
  );
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <span className="border border-danger">
      <p>{message}</p>
    </span>
  );
};

export default Signup;
