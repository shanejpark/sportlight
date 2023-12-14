"use client";

import * as client from "../../client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import FollowDisplay from "./followDisplay";

function ProfileHeader() {
  const { id } = useParams();

  const [account, setAccount] = useState<client.IUser>();

  const findUserById = async (id: any) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  const formattedPhoneNumber = (num: String) => {
    let formattedNumber =
      "(" +
      String(num).substring(0, 3) +
      ")" +
      String(num).substring(3, 6) +
      "-" +
      String(num).substring(6);
    return formattedNumber;
  };

  return (
    <div className="container">
      <div className="row ms-5">
        {account && (
          <div className="col-sm-9 ms-3">
            <h2>
              {account.firstName} {account.lastName}
            </h2>
            <p>{account.pronouns !== "None" ? account.pronouns : ""}</p>

            {id === undefined ? (
              <>
                <p className="mb-0">
                  {account.phoneNumber != undefined
                    ? formattedPhoneNumber(account.phoneNumber)
                    : ""}
                </p>
                <p>{account.email}</p>
              </>
            ) : null}

            <FollowDisplay
              followersIds={account.followers}
              followingIds={account.following}
            />

            <p className="text-break">{account.bio} </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProfileHeader;
