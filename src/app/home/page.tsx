import Link from "next/link";
import HomeHighlights from "../components/home-highlights";
import HomeMatches from "../components/home-matches";
import HomePeople from "../components/home-people";

export default function Main() {
    return (
        <div>
            <Link href="/match">See Match</Link>
            <br/>
            <Link href="/highlight">See Highlight</Link>
            <div className="container w-75">
                <HomeHighlights />
                <HomeMatches />
                <HomePeople/>
            </div>
        </div>
    )

}