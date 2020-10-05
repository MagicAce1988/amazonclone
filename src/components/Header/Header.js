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
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = ({ ...props }) => {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    user && auth.signOut();
  };
  return (
    <Container {...props}>
      <HeaderLogo
        onClick={() => history.push("/")}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <HeaderSearch>
        <Input type="text" />
        <Search />
      </HeaderSearch>
      <HeaderNav>
        <Link to={!user && "/login"}>
          <HeaderOption onClick={handleAuthentication}>
            <OptionLineOne>{`Hello ${
              user ? user.email : "Guest"
            }`}</OptionLineOne>
            <OptionLineTwo>{user ? "Sign Out" : "Sign In"}</OptionLineTwo>
          </HeaderOption>
        </Link>
        <Link to={user && "/orders"}>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
        </Link>
        <HeaderOption>
          <OptionLineOne>Your</OptionLineOne>
          <OptionLineTwo>Prime</OptionLineTwo>
        </HeaderOption>
        <Link to="/checkout">
          <HeaderOptionBasket>
            <ShoppingBasketIcon />
            <HeaderBasketCount>{basket?.length}</HeaderBasketCount>
          </HeaderOptionBasket>
        </Link>
      </HeaderNav>
    </Container>
  );
};

export default Header;
