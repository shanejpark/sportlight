"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

function HomeHighlight(items: any) {
    const [vid, setVid] = useState<any>(null);

    const fetchVideoEmbed = async () => {
        fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(items.vUrl)}&format=json`)
            .then((res) => res.json())
            .then((data) => {
                setVid(data.html);
                console.log(data);
            });
    }

    useEffect(() => {
        fetchVideoEmbed();
    }, []);

    return (
        <div className="col-sm-auto d-flex flex-column align-items-stretch mb-3 ms-4 me-5 bg-light rounded">
            <Link href={{ pathname: "/highlight", query: { id: items.hId } }} className='text-decoration-none '>
                <div className='video-container mt-3'>
                    {vid ? <div dangerouslySetInnerHTML={{ __html: vid }} /> : <div className='text-center'>Loading...</div>}
                </div>
                <h5 className='text-center mt-3 mb-3' style={{color: "black"}}>View
                </h5>
            </Link>
        </div>
    );
}

export default HomeHighlight;