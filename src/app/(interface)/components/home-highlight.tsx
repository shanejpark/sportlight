"use client";

import Link from 'next/link';

function HomeHighlight(items: any) {

    return (
        <div className="col-lg flex-column align-items-center mb-5 ms-5 me-5">
            <Link href={{ pathname: "/highlight", query: {id: items.hId}}}>
                <div className='video-container'>
                <iframe src={items.vUrl} frameBorder="0"></iframe>
                </div>
                <h3 className='text-center mt-4'>View Highlight
                </h3>
                </Link>
        </div>
    );
}

export default HomeHighlight;