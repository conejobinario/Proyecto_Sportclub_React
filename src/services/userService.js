const API_URL = "http://localhost:3000/api/users"; [cite: 257]

function getToken() {
  return localStorage.getItem("token"); [cite: 260]
}

function getHeaders() {
  return {
    "Content-Type": "application/json", [cite: 263]
    "Authorization": `Bearer ${getToken()}` [cite: 264]
  };
}

// Listar usuarios (GET)
export async function getUsers() {
  const response = await fetch(API_URL, { [cite: 268]
    method: "GET", [cite: 269]
    headers: getHeaders() [cite: 270]
  });
  if (!response.ok) { [cite: 273]
    throw new Error("Error al obtener usuarios"); [cite: 274]
  }
  return response.json(); [cite: 276]
}

// Crear usuario (POST)
export async function createUser(userData) {
  const response = await fetch(API_URL, { [cite: 279]
    method: "POST", [cite: 281]
    headers: getHeaders(), [cite: 282]
    body: JSON.stringify(userData) [cite: 283]
  });
  const data = await response.json(); [cite: 284]
  if (!response.ok) { [cite: 285]
    throw new Error(data.message || "Error al crear usuario"); [cite: 287]
  }
  return data; [cite: 288]
}

// Editar usuario (PUT)
export async function updateUser(id, userData) {
  const response = await fetch(`${API_URL}/${id}`, { [cite: 290]
    method: "PUT", [cite: 291]
    headers: getHeaders(), [cite: 292]
    body: JSON.stringify(userData) [cite: 293]
  });
  const data = await response.json(); [cite: 296]
  if (!response.ok) { [cite: 297]
    throw new Error(data.message || "Error al actualizar usuario"); [cite: 299]
  }
  return data; [cite: 300]
}

// Eliminar usuario (DELETE)
export async function deleteUser(id) {
  const response = await fetch(`${API_URL}/${id}`, { [cite: 302]
    method: "DELETE", [cite: 303]
    headers: getHeaders() [cite: 304]
  });
  if (!response.ok) { [cite: 307]
    throw new Error("Error al eliminar usuario"); [cite: 308]
  }
  return true; [cite: 310]
}