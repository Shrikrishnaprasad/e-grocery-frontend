import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Products = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
