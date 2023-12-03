import exp from "constants";
import HomePerson from "./home-person";

function HomePeople() {
    return (
        <div>
            <h4>People</h4>
            <div className="row d-flex ms-5 me-5 mt-5">
                <HomePerson />
                <HomePerson />
                <HomePerson />
            </div>
        </div>
    );
}
export default HomePeople;