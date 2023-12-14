import Image from "next/image";
import Button from "react-bootstrap/Button";


function Match({d}) {
  const dateStringToUS = (dateString: string) => {
    const dateObject = new Date(dateString);
    
    // Format the date
    return dateObject.toLocaleDateString('en-US');
  }

  return (
    <div className="container w-75">
      <div className="row d-flex ms-5 me-5">
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src={d.country.logo}
            width="300"
            height="200"
            alt="flag"
            className="img-thumbnail"
          />
          <div className="ms-4">
            <p>{d.country.code}</p>
            <p>{d.stage!}</p>
            <p>{d.week}</p>
            <p>{dateStringToUS(d.date)}</p>
          </div>
        </div>

        <div className="col-lg d-flex align-items-center mb-5 ms-5">
          <Image
            src={d.league.logo}
            alt="league"
            width="200"
            height="200"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <p>{d.league.name}</p>
            <p>{d.league.season}</p>
            <Button variant="outline-dark">+ Favorite</Button>{" "}
          </div>
        </div>
      </div>

      <div className="row mt-5 ms-5 me-5">
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src={d.homeTeam.logo}
            width="200"
            height="200"
            alt="home-team"
            className="img-thumbnail"
          />
          <div className="ms-5">
            <p>Home Team</p>
            <p>{d.homeTeam.name}</p>
            <Button variant="outline-dark">+ Favorite</Button>{" "}
          </div>
        </div>
        <div className="col-lg d-flex align-items-center mb-5">
          <Image
            src={d.awayTeam.logo}
            width="200"
            height="200"
            alt="away-team"
            className="img-thumbnail"
          />
          <div className="ms-5">
          <p>Away Team</p>
            <p>{d.awayTeam.name}</p>
            <Button variant="outline-dark">+ Favorite</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
