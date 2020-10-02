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
            title="YOSUDA Indoor Cycling Bike Stationary"
            price={288.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61Ky1vUThdL._AC_UX679_.jpg"
            rating={5}
            id={1}
          />
          <Product
            title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones "
            price={18.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51fWchh4m3L._AC_SL1000_.jpg"
            rating={3}
            id={2}
          />
        </Row>
        <Row>
          <Product
            title="Yidarton Women's Comfy Casual Twist Knot"
            price={15.55}
            image="https://images-na.ssl-images-amazon.com/images/I/61pgA8ZK1yL._AC_UY879_.jpg"
            rating={5}
            id={3}
          />
          <Product
            title="MINGER Led Strip Lights Kit"
            price={22.09}
            image="https://images-na.ssl-images-amazon.com/images/I/71rNE8ES7SL._AC_SL1000_.jpg"
            rating={3}
            id={4}
          />
          <Product
            title="IUGA High Waist Yoga Pants with Pockets"
            price={21.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71xVE%2BVijKL._AC_UY879_.jpg"
            rating={5}
            id={5}
          />
        </Row>
        <Row>
          <Product
            title="YUDODO Pet Dog Sling Carrier Breathable Mesh"
            price={27.18}
            image="https://images-na.ssl-images-amazon.com/images/I/61d8hy7saPL._AC_SL1001_.jpg"
            rating={5}
            id={6}
          />
        </Row>
      </HomeHeader>
    </Container>
  );
};

export default Home;
