import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, Container } from "react-bootstrap";
import { getUser, logout } from "../services/authService";
import logo from "../assets/logo_empresa_letra_v1.png";

function AppNavbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar style={{ backgroundColor: "#2E1A47" }} className="px-4">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="SportClub" height="40" />
        </Navbar.Brand>
        <Navbar.Text className="me-3 text-white">
          {user?.full_name || user?.name} — {user?.role}
        </Navbar.Text>
        <Button variant="outline-light" size="sm" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;