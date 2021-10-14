import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useGlobalContext } from "../context";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1535228482415-b728d6e690c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 24%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ name: email });
      setEmail("");
      setPassword("");
      history.goBack();
    } else {
      alert("Please fill out all the fields");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button>LOGIN</Button>
            <Link onClick={() => history.push("/register")}>
              CREATE A NEW ACCOUNT{" "}
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
