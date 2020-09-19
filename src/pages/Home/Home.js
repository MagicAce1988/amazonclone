import React from "react";
import { Product } from "../../components";

import { Container, HomeHeader, ImageHeader, Row } from "./Home.styled";

const Home = ({ ...props }) => {
  return (
    <Container {...props}>
      <HomeHeader>
        <ImageHeader src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        <Row>
          <Product
            title="The Lean Start-Up"
            price="29.99"
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            rating={5}
          />
          <Product />
        </Row>
        <Row>
          <Product />
          <Product />
          <Product />
        </Row>
        <Row>
          <Product />
        </Row>
      </HomeHeader>
    </Container>
  );
};

export default Home;
