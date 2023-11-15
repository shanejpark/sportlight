import Link from "next/link";

export default function Profile() {
    return (
        <div>
            <h1>Hello, Profile page!</h1>
            <Link href="/profile/edit">Edit Profile</Link>
        </div>
    )
}