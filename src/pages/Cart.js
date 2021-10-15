import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useHistory } from "react-router";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useGlobalContext } from "../context";
import PayByRazorPay from "./PayByRazorPay";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Cart = () => {
  const history = useHistory();
  const { cart, total, clearCart, toggleAmount } = useGlobalContext();

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => history.push("/productList")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart?.length})</TopText>
          </TopTexts>
          <TopButton onClick={clearCart} style={{ color: "red" }}>
            CLEAR CART
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.length === 0 && <Title>Your cart is empty</Title>}
            {cart?.map((item) => {
              return (
                <>
                  <Product key={item?.id}>
                    <ProductDetail>
                      <Image src={item?.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item?.name}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item?.id + new Date().getTime()}
                        </ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove
                          onClick={() => toggleAmount(item?.id, "dec")}
                          style={{ cursor: "pointer" }}
                        />
                        <ProductAmount>{item?.amount}</ProductAmount>
                        <Add
                          onClick={() => toggleAmount(item?.id, "inc")}
                          style={{ cursor: "pointer" }}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        ₹ {item?.price}{" "}
                        <span style={{ fontSize: "20px" }}>/- kg</span>
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹. {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹. 60.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice style={{ color: "red" }}>
                ₹. {total >= 500 ? "-60.00" : "-0.00"}{" "}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice style={{ color: "green" }}>
                ₹. {total >= 500 ? total - 60 : total}
              </SummaryItemPrice>
            </SummaryItem>
            {total > 0 ? (
              <PayByRazorPay amount={total >= 500 ? total - 60 : total} />
            ) : (
              <TopButton
                onClick={() => alert("Your cart is empty!")}
                style={{ width: "100%" }}
              >
                CHECKOUT NOW
              </TopButton>
            )}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
