import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Utilize useEffect to clear the success message after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    // Validación de la contraseña
=======
    // Validate password
>>>>>>> ee8c70e (Se agrego sistema de reservas, principal.jsx y css, tambien AgregarTurnos, Formulario y TurnosTabla)
    if (password.length < 4 || password.length > 20) {
      setPasswordError('Password must be at least 4 characters and less than 20 characters');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await fetch('http://localhost:5004/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        setSuccessMessage('Login successful. Welcome back!');
        setTimeout(() => {
          navigate('/'); // Redirect to home page after successful login
        }, 2000); // 2 seconds transition
      } else {
        // Handle server errors
        setServerError(data.message || 'Error logging in. Please try again.');
      }
    } catch (error) {
      setServerError('Error logging in. Please try again.');
    }
  };

  return (
    <div>
      {successMessage && <p className="text-success">{successMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
        </Form.Group>
        {serverError && <p className="text-danger">{serverError}</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
