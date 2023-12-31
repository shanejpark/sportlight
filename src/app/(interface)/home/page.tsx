import HomeHighlights from "../components/home-highlights";
import HomeMatches from "../components/home-matches";
import HomePeople from "../components/home-people";

export default function Main() {
  return (
    <div>
      <div className="row d-flex ms-5 me-5 mt-5">
        <div className="container">
          <HomeHighlights />
          <HomeMatches />
          <HomePeople />
        </div>
      </div>
    </div>
  );
}
