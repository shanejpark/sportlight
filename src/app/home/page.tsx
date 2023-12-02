import Link from "next/link";
import HomeHighlights from "../components/home-highlights";
import HomeMatches from "../components/home-matches";
import HomePeople from "../components/home-people";
import HomeCheckboxes from "../components/home-checkboxes";

export default function Main() {
    return (
        <div>
            <div className="row d-flex ms-5 me-5 mt-5">
                <div className="col-2 d-flex align-items-start mt-3">
                    {/* <Image src="https://placehold.co/300x200" alt="flag" thumbnail />
                    <div className='ms-4'>
                        <p>Country</p>
                        <p>Stage</p>
                        <p>Week</p>
                        <p>Date</p>
                    </div> */}
                    <HomeCheckboxes />
                </div>

                <div className="col-10 d-flex align-items-center">
                    <div className="container">
                    <HomeHighlights />
                    <HomeMatches />
                    <HomePeople/>
                    </div>
                </div>
            </div>
        </div>
    )

}