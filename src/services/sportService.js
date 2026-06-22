const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getSports = async () => {
  const res = await fetch(`${API_URL}/api/sports`);
  if (!res.ok) throw new Error("Error al obtener deportes");
  return res.json();
};

export const createSport = async (data) => {
  const res = await fetch(`${API_URL}/api/sports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear deporte");
  return res.json();
};

export const updateSport = async (id, data) => {
  const res = await fetch(`${API_URL}/api/sports/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar deporte");
  return res.json();
};

export const deleteSport = async (id) => {
  const res = await fetch(`${API_URL}/api/sports/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar deporte");
  return res.json();
};

export const toggleSportStatus = async (id, status) => {
  const res = await fetch(`${API_URL}/api/sports/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Error al cambiar estado");
  return res.json();
};