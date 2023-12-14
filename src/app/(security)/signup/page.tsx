"use client";

import * as client from "../../client";
import React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
function Signup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: 1,
  });
  const signup = async () => {
    try {
      await client.signup(user);
      router.push("/profile");
    } catch (err: any) {
      setShowError(true);
      setError(err.message);
    }
  };
  return (
    <div>
      <h1>Sign up 🏀</h1>
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
          type="password"
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
      <button className="btn btn-dark mt-4" onClick={signup}>
        Sign up
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
