import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 80vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: purple;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  const history = useHistory();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => history.push("/productList")}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
