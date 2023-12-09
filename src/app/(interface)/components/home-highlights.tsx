import HomeHighlight from './home-highlight';
import HomePerson from './home-person';

function HomeHighlights() {
    return (
        <div>
            <h4>Highlights</h4>
            
            <div className="row d-flex ms-5 me-5 mt-5">
            
                <HomeHighlight />
                
                <HomeHighlight />
                
            </div>

            <div className="row mt-5 ms-5 me-5">
                <HomeHighlight />
                <HomeHighlight />
            </div>

            
        </div>
    );
}

export default HomeHighlights;