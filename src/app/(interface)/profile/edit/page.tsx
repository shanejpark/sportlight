"use client";

import * as client from "../../../client";
import { IUser } from "../../../client";
import { useState, useEffect } from "react";

export default function ProfileEdit() {
  const [account, setAccount] = useState<IUser | any>({});

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="container mt-5 w-50">
      <h1>Edit Profile</h1>
      <form>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputName1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            onChange={(e) =>
              setAccount({
                ...account,
                firstName: e.target.value,
              })
            }
            value={account.firstName}
          />
          <label htmlFor="exampleInputName1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            onChange={(e) =>
              setAccount({
                ...account,
                lastName: e.target.value,
              })
            }
            value={account.lastName}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pronouns</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setAccount({
                ...account,
                pronouns: e.target.value,
              })
            }
            value={account.pronouns}
          >
            <option selected>None</option>
            <option value="He/Him">He/Him</option>
            <option value="She/Her">She/Her</option>
            <option value="They/Them">They/Them</option>
            <option value="He/They">He/They</option>
            <option value="She/They">She/They</option>
            <option value="He/She/They">He/She/They</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="exampleInputBio1" className="form-label">
            Bio
          </label>
          <textarea
            className="form-control"
            id="exampleInputBio1"
            rows={3}
            onChange={(e) =>
              setAccount({
                ...account,
                bio: e.target.value,
              })
            }
            value={account.bio}
          ></textarea>
        </div>

        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhone1"
            aria-describedby="phoneNumberHelp"
            maxLength={10}
            onChange={(e) =>
              setAccount({
                ...account,
                phoneNumber: e.target.value,
              })
            }
            value={account.phoneNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setAccount({
                ...account,
                email: e.target.value,
              })
            }
            value={account.email}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>
              setAccount({
                ...account,
                password: e.target.value,
              })
            }
            value={account.password}
          />
        </div>

        <div>
          <a
            className="btn btn-primary float-end mb-3"
            href="/profile"
            role="button"
            onClick={save}
          >
            Submit
          </a>
          <a
            className="btn btn-secondary float-end me-2 mb-3"
            href="/profile"
            role="button"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
