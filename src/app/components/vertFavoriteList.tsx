import Image from 'react-bootstrap/Image';

interface Props {
    title: string;
}

function VertFavoriteList(props: Props) {
    return (
        <div className="card w-50 me-5" >
            <div className="card-header">
                Favorite {props.title}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex align-items-center">
                        <Image src="https://placehold.co/100x100" alt="pic" thumbnail />
                        <div className='d-flex flex-column ms-5'>
                            <p className='mb-0'>Name</p>
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Country</p>
                            }
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Season</p>}
                        </div>

                    </div>

                </li>
                <li className="list-group-item">
                    <div className="d-flex align-items-center">
                        <Image src="https://placehold.co/100x100" alt="pic" thumbnail />
                        <div className='d-flex flex-column ms-5'>
                            <p className='mb-0'>Name</p>
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Country</p>
                            }
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Season</p>}
                        </div>

                    </div>

                </li>
                <li className="list-group-item">
                    <div className="d-flex align-items-center">
                        <Image src="https://placehold.co/100x100" alt="pic" thumbnail />
                        <div className='d-flex flex-column ms-5'>
                            <p className='mb-0'>Name</p>
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Country</p>
                            }
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Season</p>}
                        </div>

                    </div>

                </li>
                <li className="list-group-item">
                    <div className="d-flex align-items-center">
                        <Image src="https://placehold.co/100x100" alt="pic" thumbnail />
                        <div className='d-flex flex-column ms-5'>
                            <p className='mb-0'>Name</p>
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Country</p>
                            }
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Season</p>}
                        </div>

                    </div>

                </li>
                <li className="list-group-item">
                    <div className="d-flex align-items-center">
                        <Image src="https://placehold.co/100x100" alt="pic" thumbnail />
                        <div className='d-flex flex-column ms-5'>
                            <p className='mb-0'>Name</p>
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Country</p>
                            }
                            {props.title === 'Leagues' &&
                                <p className='mb-0'>Season</p>}
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    );
}
export default VertFavoriteList;