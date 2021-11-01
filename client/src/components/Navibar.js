// option 2 of NavBar

import React, { useContext } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import {AuthContext} from "../context/AuthContext";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {

  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
      event.preventDefault()
      auth.logout()
      history.push('/')
  }

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Michael Vorontsov</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/"> Home </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/expirience"> Expirience </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/works"> My works </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts"> Contacts </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
              <Nav style={{'left':'20px'}}>
              <a href="/" onClick={logoutHandler}>Exit</a>
              </Nav>           
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

// <NavBar collapsOnSelect > -> свойство переключает expand на значение false после срабатывания OnSelect у компонента NavBar
// expand="lg"(large) -> точка останова - сворачивание панели навигации
// NavBar.Brand -> Logo
// NavBar.Toggle - кнопка для свертывания меню
// NavBar.Collapse - меню, которое будет разворачиваться
// Nav.Link - ссылки
// Link to -> переход для роутинга
// Modal - модальное окно авторизации
