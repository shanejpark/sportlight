"use client";

import Link from 'next/link';
import FollowDisplay from "./followDisplay";

function HomePerson(props: { user: any; }) {
    const user = props.user;
    
    return (
            <Link className="text-decoration-none" key={user._id} href={`/profile/${user._id}`}>
                <div className="card h-100 me-5 ms-5 mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                        <h6 className="card-subtitle mb-3 text-muted">{user.bio}</h6>
                        <FollowDisplay followersIds={user.followers} followingIds={user.following}/>
                    </div>
                </div>
            </Link>
    );
}

export default HomePerson;