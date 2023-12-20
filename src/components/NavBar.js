import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  ADMIN_ROUTE,
  BUY_ROUTE,
  LIBRARY_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utilis/consts";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
  const history = useHistory();
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={LIBRARY_ROUTE}
        >
          BookPoisk
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
              style={{ marginLeft: "20px" }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <NavLink
              to={REGISTRATION_ROUTE}
              style={{ textDecoration: "none" }}
            >
              <Button variant={"outline-light"}>Регистрация</Button>
            </NavLink>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
