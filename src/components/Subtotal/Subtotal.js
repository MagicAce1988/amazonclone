import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../redux/reducer";
import { useStateValue } from "../../StateProvider";
import { CheckoutButton, Container, SubtotalGift } from "./Subtotal.styled";

const Subtotal = ({ ...props }) => {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <Container {...props}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox" /> This order contains a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <CheckoutButton onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </CheckoutButton>
    </Container>
  );
};

export default Subtotal;
