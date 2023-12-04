"use client";

import * as client from "./client";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const signin = async () => {
    await client.signin(credentials);
    router("/profile");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;
