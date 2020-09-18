import React from "react";
import {
  Container,
  HeaderLogo,
  HeaderNav,
  HeaderOption,
  HeaderSearch,
  Input,
} from "./Header.styled";

const Header = ({ ...props }) => {
  return (
    <Container {...props}>
      <HeaderLogo
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <HeaderSearch>
        <Input type="text" />
      </HeaderSearch>
      <HeaderNav>
        <HeaderOption></HeaderOption>
        <HeaderOption></HeaderOption>
        <HeaderOption></HeaderOption>
      </HeaderNav>
    </Container>
  );
};

export default Header;
