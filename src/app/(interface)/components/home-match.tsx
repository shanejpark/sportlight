"use client";

import Link from 'next/link';
import Image from "next/image";

function HomeMatch(items: any) {
    return (
        <div className="col-sm-auto d-flex flex-column align-items-stretch mb-5 ms-4 me-5 bg-light rounded">
            <Link href={{ pathname: "/match", query: { id: items.mId } }} className='text-decoration-none '>
            <div>
          <Image
            src={items.imgUrl}
            alt="league"
            width="200"
            height="250"
            quality="100"
            className="img-thumbnail"
          />
        </div>
                <h5 className='text-center mt-3 mb-3' style={{color: "black"}}>View
                </h5>
            </Link>
        </div>
    );
}

export default HomeMatch;

