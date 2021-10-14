import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Heading = styled.div`
  text-align: center;
  padding: 2rem;
`;
const H1 = styled.h1`
  color: #222;
  font-size: 4rem;
`;
const About = styled.div`
  padding: 3rem 9%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
const AboutImage = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 40rem;
  flex: 1 1 40rem;
`;
const AboutIMG = styled.img`
  width: 100%;
`;
const Content = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 40rem;
  flex: 1 1 40rem;
`;
const ContentH3 = styled.h3`
  color: #222;
  font-size: 2rem;
`;
const ContentP = styled.p`
  color: #666;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const Gallery = styled.div`
  padding: 3rem 9%;
`;
const Title = styled.h1`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  padding: 1.2rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  color: #222;
`;
const TitleSpan = styled.span`
  color: purple;
  padding-left: 0.7rem;
`;
const BoxContainer = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;
const Box = styled.div`
  height: 25rem;
  overflow: hidden;
  position: relative;
`;
const BoxIMG = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
const AboutUs = () => {
  return (
    <Container>
      <Heading>
        <H1>About Us</H1>
      </Heading>
      <About>
        <AboutImage>
          <AboutIMG
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            aly=""
          ></AboutIMG>
        </AboutImage>
        <Content>
          <ContentH3>Fresh and Organic groceries</ContentH3>
          <ContentP>
            Did you ever imagine that the freshest of fruits and vegetables, top
            quality pulses and food grains, dairy products and hundreds of
            branded items could be handpicked and delivered to your home, all at
            the click of a button? India’s first comprehensive online megastore,
            E-Grocery, brings many products to our happy customers
          </ContentP>
          <ContentP>
            When it comes to payment, we have made it easy for our customers can
            pay through multiple payment channels like Credit and Debit cards,
            Internet Banking, e-wallets or simply pay Cash on Delivery (COD).The
            convenience of shopping for home and daily needs, while not
            compromising on quality, has made the online supermarket of choice
            for thousands of happy customers across India.
          </ContentP>
        </Content>
      </About>
      <Gallery>
        <Title>
          Our
          <TitleSpan>Gallery</TitleSpan>
        </Title>
        <BoxContainer>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1604742763104-86a0cf0aa1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1553546895-531931aa1aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1512576666689-502f7d95eb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt=""
            ></BoxIMG>
          </Box>

          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1599678914948-8e0a39f42a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80"
              alt=""
            ></BoxIMG>
          </Box>
          <Box>
            <BoxIMG
              src="https://images.unsplash.com/photo-1437276030334-d2faf20c1323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            ></BoxIMG>
          </Box>
        </BoxContainer>
      </Gallery>
    </Container>
  );
};

export default AboutUs;
