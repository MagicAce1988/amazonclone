import React, { useEffect, useState } from "react";
import { Container, Order } from "./Orders.styled";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import { OrderSummary } from "../../components/";

const Orders = ({ ...props }) => {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Container {...props}>
      <h1>Your Orders</h1>
      <Order>
        {orders?.map((order) => (
          <OrderSummary order={order} />
        ))}
      </Order>
    </Container>
  );
};

export default Orders;
