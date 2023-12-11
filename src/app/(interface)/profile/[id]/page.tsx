import Link from "next/link";
import ProfileHeader from "../../components/profileHeader";
import Button from "react-bootstrap/Button";
import { MdOutlineEdit } from "react-icons/md";
import CardDeck from "../../components/cardDeck";
import VertFavoriteList from "../../components/vertFavoriteList";

export default function UserProfile() {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex mt-5 ms-5">
                <ProfileHeader />
                <div className="w-25 float-end">
                    <Button variant="outline-secondary">
                       + Follow
                    </Button>
                </div>
            </div >
            <div className="d-flex flex-column align-items-center mt-5 bg-light ms-5 me-5 pt-3 rounded">
                <h4>Favorite Matches</h4>
                <CardDeck />
            </div>

            <div className="d-flex flex-column align-items-center mt-5 bg-light ms-5 me-5 pt-3 rounded">
                <h4>Favorite Highlights</h4>
                <CardDeck />
            </div>

            <div className="d-flex ms-5 me-5 mt-5 mb-3">
                <VertFavoriteList title="Leagues" />
                <VertFavoriteList title="Teams" />
            </div>
        </div>
    )
}