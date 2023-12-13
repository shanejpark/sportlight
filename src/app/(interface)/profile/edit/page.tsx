"use client";

import * as client from "../../../client";
import { IUser } from "../../../client";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function ProfileEdit() {
  const [account, setAccount] = useState<IUser>();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const save = async () => {
    await client.updateUser(account!);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="container mt-5 w-50">
      <h1>Edit Profile</h1>
      <Form>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputName1" className="htmlForm-label">
            First Name
          </label>
          <input
            type="text"
            className="htmlForm-control mb-3"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            onChange={(e) =>
              setAccount({
                ...account!,
                firstName: e.target.value,
              })
            }
            value={`${account!.firstName}`}
          />
          <label htmlFor="exampleInputName1" className="htmlForm-label">
            Last Name
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            onChange={(e) =>
              setAccount({
                ...account!,
                lastName: e.target.value,
              })
            }
            value={`${account!.lastName}`}
          />
        </div>

        <div className="mb-3">
          <label className="htmlForm-label">Pronouns</label>
          <select
            className="htmlForm-select"
            aria-label="Default select example"
            onChange={(e) =>
              setAccount({
                ...account!,
                pronouns: e.target.value,
              })
            }
            value={`${account!.pronouns}`}
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
          <label htmlFor="exampleInputBio1" className="htmlForm-label">
            Bio
          </label>
          <textarea
            className="htmlForm-control"
            id="exampleInputBio1"
            rows={3}
            onChange={(e) =>
              setAccount({
                ...account!,
                bio: e.target.value,
              })
            }
            value={`${account!.bio}`}
          ></textarea>
        </div>

        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputPhone1" className="htmlForm-label">
            Phone Number
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="exampleInputPhone1"
            aria-describedby="phoneNumberHelp"
            maxLength={10}
            onChange={(e) =>
              setAccount({
                ...account!,
                phoneNumber: e.target.value,
              })
            }
            value={`${account!.phoneNumber}`}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Email address
          </label>
          <input
            type="email"
            className="htmlForm-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setAccount({
                ...account!,
                email: e.target.value,
              })
            }
            value={`${account!.email}`}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Password
          </label>
          <input
            type="password"
            className="htmlForm-control"
            id="exampleInputPassword1"
            onChange={(e) =>
              setAccount({
                ...account!,
                password: e.target.value,
              })
            }
            value={`${account!.password}`}
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
      </Form>
    </div>
  );
}
