import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

export default function ProfileEdit() {
    return (
        <div className="container mt-5">
            <div className="row ms-5">
                <div className="col">
                    <Image src="https://placehold.co/600x600" alt="profPic" thumbnail />
                </div>
                <div className="col-9 ms-5">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputName1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Pronouns</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>None</option>
                                <option value="1">He/Him</option>
                                <option value="2">She/Her</option>
                                <option value="3">They/Them</option>
                                <option value="3">He/They</option>
                                <option value="3">She/They</option>
                                <option value="3">He/She/They</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label for="exampleInputBio1" className="form-label">Bio</label>
                            <textarea class="form-control" id="exampleInputBio1" rows="2"></textarea>
                        </div>

                        <div className="mb-3 mt-5">
                            <label for="exampleInputPhone1" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleInputPhone1" aria-describedby="phoneNumberHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-5">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div>
                             <a className="btn btn-primary float-end" href="/profile" role="button">Submit</a>
                             <a className="btn btn-secondary float-end me-2" href="/profile" role="button">Cancel</a>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}