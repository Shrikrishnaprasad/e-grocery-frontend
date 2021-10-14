import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { useGlobalContext } from "../context";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 80%;
  width: 90%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const ProductName = styled.p`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 25px;
  transition: all 0.5s ease;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const Product = ({ item }) => {
  const history = useHistory();
  const { addCart } = useGlobalContext();

  const handleAdd = () => {
    addCart({
      id: item.id,
      name: item.name,
      img: item.img,
      amount: 1,
      price: item.price,
    });
  };
  return (
    <Container>
      <Circle />
      <Image src={item?.img || ""} />
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={handleAdd} />
        </Icon>
        <ProductName>{item.name}</ProductName>
        <Icon>
          <SearchOutlined onClick={() => history.push(`/product/${item.id}`)} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
