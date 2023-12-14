import Button from "react-bootstrap/Button";
import Match from "../components/match";

export default function MatchDetails() {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex mt-5 align-items-center mb-5">
                    <h1 className="me-auto invisible">Match</h1>
                    <h1>Match</h1>
                    <Button variant="outline-dark" className="ms-5">+ Favorite</Button>{' '}
                </div>
            </div>
            <Match />
        </div>
    )
}