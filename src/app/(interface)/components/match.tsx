import Image from "next/image";
import Button from "react-bootstrap/Button";

function Match() {
  return (
    <div className="container w-75">
      <div className="row d-flex ms-5 me-5">
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src="https://placehold.co/300x200"
            width="300"
            height="200"
            alt="flag"
            className="img-thumbnail"
          />
          <div className="ms-4">
            <p>Country</p>
            <p>Stage</p>
            <p>Week</p>
            <p>Date</p>
          </div>
        </div>

        <div className="col-lg d-flex align-items-center mb-5 ms-5">
          <Image
            src="https://placehold.co/200x200"
            alt="league"
            width="200"
            height="200"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <p>League Name</p>
            <p>Season</p>
            <Button variant="outline-secondary">+ Favorite</Button>{" "}
          </div>
        </div>
      </div>

      <div className="row mt-5 ms-5 me-5">
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src="https://placehold.co/200x200"
            width="200"
            height="200"
            alt="home-team"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <p>Home Team</p>
            <Button variant="outline-secondary">+ Favorite</Button>{" "}
          </div>
        </div>
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src="https://placehold.co/200x200"
            width="200"
            height="200"
            alt="away-team"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <p>Away Team</p>
            <Button variant="outline-secondary">+ Favorite</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
