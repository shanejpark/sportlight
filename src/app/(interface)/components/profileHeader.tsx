import Image from 'react-bootstrap/Image';

function ProfileHeader() {
    return (
        <div className="container">
            <div className="row ms-5">
                <div className="col-md mb-3">
                    <Image src="https://placehold.co/200x200" alt="profPic" thumbnail />
                </div>
                <div className="col-sm-9 ms-5">
                   <h4>User name (pronouns)</h4>
                   <p className='mb-0'>(555)-555-5555</p>
                   <p>useremail@email.com</p>

                   <p>10 Followers  |  12 Following</p>

                   <p className='text-break'>This is my bio, I love sports and stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

            </div>
        </div>
    )
};
export default ProfileHeader; 