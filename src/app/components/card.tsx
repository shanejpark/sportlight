import Link from "next/link";
import "./styles.css"

function CardThumbnail() {
    return (
        <Link href="/highlight" className="text-decoration-none">
            <div className="card wd-card-body me-4">
                <img className="card-img-top" src="https://placehold.co/200" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title (Team vs Team)</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Date: xxxxxxx</small></p>
                </div>
            </div>
        </Link>
    );
}
export default CardThumbnail;