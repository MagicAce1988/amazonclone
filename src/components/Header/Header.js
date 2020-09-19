import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {
  Container,
  HeaderBasketCount,
  HeaderLogo,
  HeaderNav,
  HeaderOption,
  HeaderOptionBasket,
  HeaderSearch,
  Input,
  OptionLineOne,
  OptionLineTwo,
  Search,
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
        <Search />
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
        <HeaderOptionBasket>
          <ShoppingBasketIcon />
          <HeaderBasketCount>0</HeaderBasketCount>
        </HeaderOptionBasket>
      </HeaderNav>
    </Container>
  );
};

export default Header;
