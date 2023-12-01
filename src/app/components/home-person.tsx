import Button from 'react-bootstrap/esm/Button';
import Link from 'next/link';
import { FaCircle } from "react-icons/fa6";

function HomePerson() {
    return (
            <div className="col-lg d-flex align-items-center mb-5 ms-4 me-4 flex-column">
                <Link href="/highlight">
                    <FaCircle size={125} color={"silver"}/>
                </Link>
                    <div className='mt-4'>
                        <Button variant="secondary" size="sm">+ Follow</Button>{' '}
                        </div>
                </div>
    );
}

export default HomePerson;