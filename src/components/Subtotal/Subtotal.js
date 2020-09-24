import React from "react";
import CurrencyFormat from "react-currency-format";
import { Container, SubtotalGift } from "./Subtotal.styled";

const Subtotal = ({ ...props }) => {
  return (
    <Container {...props}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox" /> This order contains a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="£"
      />
    </Container>
  );
};

export default Subtotal;
