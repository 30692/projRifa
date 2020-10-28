import React, { useState } from "react";

import api from "../../services/api";

import { Form, Button } from "react-bootstrap";
import Logo from "../../images/Logo.png";
import NavBar from "../NavBar";
import "./sing-up.css";

const SingUp = ({ history }) => {
  const [email_usuario, setEmail] = useState("");
  const [senha_usuario, setPassword] = useState("");
  const [nome_usuario, setName] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    const r = await api.post("/users/register", {
      email_usuario,
      senha_usuario,
      nome_usuario
    });
    if (r.data !== "") {
      history.push("/");
    } else {
      alert("Usuário/Senha Errada");
    }
  }
  return (
    <div>
      <NavBar />
      <Form id="sing-up" onSubmit={handleSignIn}>
      <div style={{display:"flex", justifyContent:"center"}}>  <img className="d-block w-100 img-fluid logo2" src={Logo} alt="First car" /> </div>
        <Form.Group controlId="formGroupName" onSubmit={handleSignIn}>
          <Form.Label>Nome </Form.Label>
          <Form.Control
            type="text" 
            placeholder="Entre com seu nome..."
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entre com sua email..."
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entre com sua senha..."
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="dark" size="lg" block>
          Cadastrar
        </Button>
        <a href="/singin">
          <p id="title-back">Voltar</p>
          <img
            id="icon"
            src="https://www.flaticon.com/svg/static/icons/svg/786/786298.svg"
            alt="Icon back"
          />
        </a>
      </Form>
    </div>
  );
};

export default SingUp;
