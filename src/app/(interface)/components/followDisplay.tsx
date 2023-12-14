import * as client from "../../client";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import { IUser } from "../../client";
import HomePerson from "./home-person";

function FollowDisplay(props: { followersIds: [String]; followingIds: [String] }) {
    const [show, setShow] = useState(false);
    const [type, setType] = useState<String>("");
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);


    const handleClose = () => setShow(false);
    const handleShow = (type: String) => {
        setType(type);
        setShow(true);
    }

    useEffect(() => {
        async function getFollowers() {
            const users = [];
            for (let followerId of props.followersIds) {
                const user = await client.findUserById(followerId);
                users.push(user)
            }
            setFollowers(users);
        }
        async function getFollowing() {
            const users = [];
            for (let followingId of props.followingIds) {
                const user = await client.findUserById(followingId);
                users.push(user)
            }
            setFollowing(users);
        }
        getFollowers();
        getFollowing();
    }, [])

    return (
        <div>
            <p><a role="button" onClick={() => handleShow("Followers")}><b>{props.followersIds.length}</b> Followers</a> |
                <a role="button" onClick={() => handleShow("Following")}><b> {props.followingIds.length}</b> Following</a></p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{type}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        type === "Following" ? 
                            (following.map((user: any) => (
                                // eslint-disable-next-line react/jsx-key
                                <div>
                                    <HomePerson user={user} />
                                </div>
                            )))
                            :
                            (followers.map((user: any) => (
                                // eslint-disable-next-line react/jsx-key
                                <div>
                                    <HomePerson user={user} />
                                </div>
                            )))
                    }
                </Modal.Body>
            </Modal>
        </div >

    )
}
export default FollowDisplay;