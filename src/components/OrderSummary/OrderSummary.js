import React from "react";
import { Container, OrderId, OrderTotal } from "./OrderSummary.styled";
import moment from "moment";
import { Product } from "./OrderSummary.styled";
import CurrencyFormat from "react-currency-format";

const OrderSummary = ({ order, ...props }) => {
  return (
    <Container {...props}>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <OrderId>
        <small>{order.id}</small>
      </OrderId>
      {order.data.basket?.map((product) => (
        <Product {...product} />
      ))}
      <CurrencyFormat
        renderText={(value) => <OrderTotal>Order Total: {value}</OrderTotal>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
    </Container>
  );
};

export default OrderSummary;
