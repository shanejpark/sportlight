import Image from 'react-bootstrap/Image';
import Link from 'next/link';

function HomeHighlight() {
    return (
            <div className="col-lg d-flex align-items-center mb-5 ms-5 me-5">
                <Link href="/highlight">
                    <Image src="https://bakersfieldnow.com/resources/media2/16x9/full/1015/center/80/60ea3a51-165d-4b38-9811-9f2d034c0e95-large16x9_AP18045638557852.jpg" alt="flag" thumbnail />
                    </Link>
                </div>
    );
}

export default HomeHighlight;