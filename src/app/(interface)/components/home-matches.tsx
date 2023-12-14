import HomeMatch from "./home-match";

function HomeMatches() {
    return (
        <div>
            <h3 className="bg-light rounded p-2">Matches 🏆</h3>
            
            <div className="row d-flex ms-5 me-5 mt-5">
            
                <HomeMatch />
                
                <HomeMatch />
                
            </div>

            <div className="row mt-5 ms-5 me-5">
                <HomeMatch />
                <HomeMatch />
            </div>

            <div className="row mt-5 ms-5 me-5">
                <HomeMatch />
                <HomeMatch />
            </div>
        </div>
    );
}
export default HomeMatches;