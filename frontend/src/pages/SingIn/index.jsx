import React, { useState } from "react";
import api from "../../services/api";
// import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import Logo from "../../images/Logo.png";
import NavBar from "../NavBar";
import "./sing-in.css";

const SingIn = ({ history }) => {
  const [email_usuario, setEmail] = useState("");
  const [senha_usuario, setPassword] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    const r = await api.post("/users/auth", { email_usuario, senha_usuario });
    if (r.data !== "") {
      const admin = await api.get("/users/admin");
      if (admin.data === "admin") {
        history.push("/");
      }
    } else {
      alert("Usuário/Senha Errada");
    }
  }

  return (
    <div>
      <NavBar />
      <Form id="sing-in" onSubmit={handleSignIn}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img className="d-block w-100 img-fluid logo" src={Logo} alt="First car" />
        </div>        
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Entre com seu email..."
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entre com sua senha..."
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="dark" size="lg" block style={{backgroundColor: 'rgb(129, 1, 1)', borderColor: 'rgb(129, 1, 1)', borderRadius: '10px'}}>
          Logar
        </Button>
        <Button href="/singup" variant="outline-secondary" size="lg" block style={{borderRadius: '10px'}}>
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default SingIn;
