import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import UsersPage from "./UsersPage";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2>Panel de Administración</h2>
      <p>Bienvenido a la sección exclusiva para administradores de SportClub.</p>
      <div className="mb-4">
        <Button variant="primary" onClick={() => navigate("/admin/sports")}>
          Gestión de Deportes
        </Button>
      </div>
      <UsersPage />
    </div>
  );
}

export default AdminDashboard;