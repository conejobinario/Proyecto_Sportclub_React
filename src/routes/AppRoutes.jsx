import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";

// Tableros por rol
import UserDashboard from "../pages/user/UserDashboard";
import CoachDashboard from "../pages/coach/CoachDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

// Componentes de Seguridad
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta por defecto manda al Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Rutas Protegidas por Rol específico */}
        <Route 
          path="/user/dashboard" 
          element={
            <RoleRoute allowedRoles={["user"]}><UserDashboard /></RoleRoute>
          } 
        />
        
        <Route 
          path="/coach/dashboard" 
          element={
            <RoleRoute allowedRoles={["coach"]}><CoachDashboard /></RoleRoute>
          } 
        />

        <Route 
          path="/admin/dashboard" 
          element={
            <RoleRoute allowedRoles={["admin"]}><AdminDashboard /></RoleRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;