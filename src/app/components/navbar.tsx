import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CgProfile } from "react-icons/cg";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/home">Sportlight</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                    <Form className='ms-5 me-auto'>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Nav className="float-end">
                        <Nav.Link href="/profile"><CgProfile size={30}/></Nav.Link>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default NavBar;