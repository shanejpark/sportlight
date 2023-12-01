import Image from 'react-bootstrap/Image';
import Link from 'next/link';

function HomeMatch() {
    return (
            <div className="col-lg d-flex align-items-center mb-5 ms-5 me-5">
                <Link href="/match">
                    <Image src="https://cdn.nba.com/manage/2023/05/2-BOS-MIA-Full-Game-Highlights-Recap-YT-Thumbnail-Playoffs-2023.png" alt="flag" thumbnail />
                    </Link>
                </div>
    );
}

export default HomeMatch;