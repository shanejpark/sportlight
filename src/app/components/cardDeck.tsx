import CardThumbnail from "./card";

function CardDeck() {
    return (
        <div className="container-fluid py-2 overflow-auto">
            <div className="d-flex flex-row flex-nowrap">
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
                <CardThumbnail/>
            </div>
        </div>
    );
}
export default CardDeck;