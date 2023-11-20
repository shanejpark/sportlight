import Link from "next/link";
import ProfileHeader from "../components/profileHeader";
import Button from "react-bootstrap/Button";
import { MdOutlineEdit } from "react-icons/md";

export default function Profile() {
    return (
            <div className="d-flex mt-5">
                <div className="ms-5">
                <ProfileHeader />
                </div>

                <div className="w-25">
                    <Link href="/profile/edit">
                        <Button variant="outline-secondary">
                            <div className="d-flex align-items-center justify-space-between">
                                <MdOutlineEdit /> 
                                Edit Profile
                            </div>
                        </Button>

                    </Link>
                </div>
            </div >
    )
}