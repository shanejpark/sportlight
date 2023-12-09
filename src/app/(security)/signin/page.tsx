"use client";

import * as client from "../client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Signin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const signin = async () => {
    await client.signin(credentials);
    router.push("/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <div className="form-group mt-4">
        <label>Email address</label>
        <input
          className="form-control mt-2 mb-2"
          placeholder="name@example.com"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label>Password</label>
        <input
          className="form-control mt-2 mb-2"
          placeholder="A very secure password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <div className="row flex-row mt-4 ">
        <button className="btn btn-primary col me-3" onClick={signin}>
          Login
        </button>
        <Link
          className="btn btn-secondary col ms-3"
          href={{ pathname: "/signup", query: credentials }}
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
export default Signin;
