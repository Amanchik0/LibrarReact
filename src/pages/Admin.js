import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark "} className="mt-4 p-2">
        Добавить жанр
      </Button>
      <Button variant={"outline-dark "} className="mt-4 p-2">
        Добавить страну
      </Button>
      <Link to="/add-book">
        <Button variant={"outline-dark "} className="mt-4 p-2">
          Добавить книгу
        </Button>
      </Link>
    </Container>
  );
};

export default Admin;
