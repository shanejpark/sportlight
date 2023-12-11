import Button from 'react-bootstrap/esm/Button';
import Link from 'next/link';
import { FaCircle } from "react-icons/fa6";
import { IUser } from '@/app/client';

function HomePerson(account: any) {
    const user = account.user;
    return (
        <div className="col-lg-3 text-decoration-none mb-5">
            <Link className="text-decoration-none" key={user._id} href={`/profile/${user._id}`}>
                <div className="card h-75 me-5 ms-5">
                    <div className="card-body">
                        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.bio}</h6>
                        {/* <p className="card-text">{user.followers}</p> */}
                    </div>
                </div>
            </Link>
            <div className='d-flex justify-content-center mt-4'>
                <Button variant="secondary" size="sm" >+ Follow</Button>{' '}
            </div>
        </div>
    );
}

export default HomePerson;