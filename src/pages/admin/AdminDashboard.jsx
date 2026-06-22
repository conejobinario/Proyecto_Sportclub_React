import React from "react";
import UsersPage from "./UsersPage";

function AdminDashboard() {
  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2>Panel de Administración</h2>
      <p>Bienvenido a la sección exclusiva para administradores de SportClub.</p>
      <UsersPage />
    </div>
  );
}

export default AdminDashboard;