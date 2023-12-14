import Button from "react-bootstrap/Button";
import Match from "../../components/match";

export default function HighlightDetails() {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex mt-5 align-items-center mb-5">
                <h1 className="me-auto invisible">Highlight</h1>
                <h1>Highlight</h1>
                <Button variant="outline-secondary" className="ms-5">+ Favorite</Button>{' '}
            </div>

            <div className="w-75 mb-5">
                <h4>Highlight Title</h4>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <Match />

            <video width="640" height="480" controls className="mt-5 mb-3">
                <source src="https://placehold.co/640x480.mp4?text=Hello+World" type="video/mp4"/> 
            </video>
        </div>
    )
}