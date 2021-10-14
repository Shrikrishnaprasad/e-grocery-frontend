import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { popularProducts } from "../data";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const [products, setProducts] = useState(popularProducts);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("new");

  useEffect(() => {
    setProducts((preproducts) =>
      popularProducts.filter((product) => {
        if (filter !== "All") {
          return product.category === filter;
        } else {
          return popularProducts;
        }
      })
    );
    if (sort === "desc") {
      setProducts((prev) => {
        return prev.sort((a, b) => Number(b.price) - Number(a.price));
      });
    } else if (sort === "asc") {
      setProducts((prev) => {
        return prev.sort((a, b) => Number(a.price) - Number(b.price));
      });
    }
  }, [filter, sort]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => setFilter(e.target.value)}>
            <Option selected value="All">
              All Categories
            </Option>
            <Option value="fruit">Fruits</Option>
            <Option value="vegetable">Vegetables</Option>
            <Option value="spices">Spices</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option selected value="new">
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products data={products} />
      <Footer />
    </Container>
  );
};

export default ProductList;
