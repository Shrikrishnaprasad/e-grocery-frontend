import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { useHistory } from "react-router";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.h2``;
const LogoText = styled.span`
  cursor: pointer;
  letter-spacing: 1px;
  color: purple;
`;
const Desc = styled.p`
  margin: 10px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  const history = useHistory();
  return (
    <Container>
      <Left>
        <Logo>
          <LogoText onClick={() => history.push("/")}> E-GROCERY</LogoText>
        </Logo>
        <Desc>
          We believes in providing the highest level of customer service and is
          continuously innovating to meet customer expectations. For all your
          order values above Rs. 500, we provide free delivery. If you ever find
          an item missing on delivery or want to return a product, you can
          report it to us within 48 hours for a refund.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={() => history.push("/")}>Home</ListItem>
          <ListItem onClick={() => history.push("/productList")}>
            Products
          </ListItem>
          <ListItem onClick={() => history.push("/cart")}>Cart</ListItem>
          <ListItem onClick={() => history.push("/register")}>
            Register
          </ListItem>
          <ListItem onClick={() => history.push("/login")}>Login</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> S.A.Garden, Selvapuram,
          Coimbatore - 641026
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 97916-27920
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> sgkrishna619@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
