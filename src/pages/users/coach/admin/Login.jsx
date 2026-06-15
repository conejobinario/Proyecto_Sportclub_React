import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { loginUser, saveSession } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Llamada al servicio de autenticación centralizado
      const data = await loginUser({ email, password });
      
      // Guardamos el token y el objeto usuario en el localStorage
      saveSession(data.data.token, data.data.user);

      // Redirección inteligente según la Rúbrica de Roles del SportClub
      if (data.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (data.data.user.role === "coach") {
        navigate("/coach/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (err) {
      // Captura el mensaje de error arrojado por el backend o el servicio
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "24rem" }} className="shadow-lg border-0 rounded-4">
        <Card.Body className="p-4">
          <Card.Title className="text-center mb-4 fw-bold text-dark">
            SportClub Login
          </Card.Title>
          
          {/* Alerta de Bootstrap dinámica si ocurre algún error de credenciales */}
          {error && <Alert variant="danger" className="py-2 text-center">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="ejemplo@demo.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Botón controlado por estado que muestra un spinner interactivo al cargar */}
            <Button 
              type="submit" 
              variant="primary" 
              className="w-100 py-2 fw-bold" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" className="me-2" />
                  Ingresando...
                </>
              ) : (
                "Ingresar"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;