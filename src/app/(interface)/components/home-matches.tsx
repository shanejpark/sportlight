import HomeMatch from "./home-match";

function HomeMatches() {
    return (
        <div>
            <h4>Matches</h4>
            
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