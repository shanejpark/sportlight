"use client";

import Link from 'next/link';

function HomeHighlight(items: any) {

    return (
        <div className="col-sm-auto d-flex flex-column align-items-stretch mb-3 ms-4 me-5 bg-light rounded">
            <Link href={{ pathname: "/highlight", query: { id: items.hId } }} className='text-decoration-none '>
                <div className='video-container mt-3'>
                    <iframe src={items.vUrl} frameBorder="0"></iframe>
                </div>
                <h5 className='text-center mt-3 mb-3' style={{color: "black"}}>View
                </h5>
            </Link>
        </div>
    );
}

export default HomeHighlight;