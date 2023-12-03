import Image from 'react-bootstrap/Image';
import Link from 'next/link';

function HomeHighlight() {
    return (
            <div className="col-lg d-flex align-items-center mb-5 ms-5 me-5">
                <Link href="/highlight">
                <video width="640" height="480" controls>
                <source src="https://placehold.co/640x480.mp4?text=Hello+World" type="video/mp4"/> 
            </video>
            <h3 className='text-center mt-4'>Detailed View</h3>
                    </Link>
                </div>
    );
}

export default HomeHighlight;