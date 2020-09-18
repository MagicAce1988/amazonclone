import React from "react";
import {
  Container,
  HeaderLogo,
  HeaderNav,
  HeaderOption,
  HeaderSearch,
  Input,
  OptionLineOne,
  OptionLineTwo,
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
        <HeaderOption>
          <OptionLineOne>Hello Guest</OptionLineOne>
          <OptionLineTwo>Sign In</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Your</OptionLineOne>
          <OptionLineTwo>Prime</OptionLineTwo>
        </HeaderOption>
      </HeaderNav>
    </Container>
  );
};

export default Header;
