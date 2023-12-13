"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { TbLogin2 } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import * as client from "../../client";
import { UserType } from "../../client";
import React, { useState, useEffect } from "react";

function NavBar() {
  const [account, setAccount] = useState(null);
  const [role, setRole] = useState(1);

  const fetchAccount = async () => {
    const account = await client.account();
    if (account) {
      setAccount(account);
      setRole(account.role ?? 1);
    }
  };

  const signout = async () => {
    await client.signout();
    setAccount(null);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link href="/home" className="navbar-brand">
          Sportlight
        </Link>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Form className="ms-5 me-auto">
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
        {account && (
          <Nav className="float-end">
            <Link href="/profile" className="nav-link">
              <CgProfile size={30} />
            </Link>
          </Nav>
        )}
        {!account && (
          <Nav className="float-end">
            <Link href="/signin" className="nav-link">
              <TbLogin2 size={30} />
            </Link>
          </Nav>
        )}
        {account && (
          <Nav className="float-end">
            <Link href="/signin" className="nav-link" onClick={signout}>
              <TbLogout2 size={30} />
            </Link>
          </Nav>
        )}
        {role === UserType.Admin && (
          <Nav className="float-end">
            <Link href="/admin" className="nav-link" onClick={signout}>
              <GrUserAdmin size={30} />
            </Link>
          </Nav>
        )}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
