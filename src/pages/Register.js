import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1535227798054-e4373ef3795a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, mobile, email, password, address } = userDetails;
    if (userName && email && password && mobile && address) {
      history.push("/login");
    } else {
      alert("Please fill out all the fields");
    }
  };
  return (
    <>
      <Navbar />

      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Name"
              onChange={(e) =>
                setUserDetails({ ...userDetails, userName: e.target.value })
              }
              required
            />
            <Input
              placeholder="Mobile number"
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobile: e.target.value })
              }
              required
            />
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              required
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              required
            />
            <Input
              placeholder="Address"
              onChange={(e) =>
                setUserDetails({ ...userDetails, address: e.target.value })
              }
              required
            />

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
