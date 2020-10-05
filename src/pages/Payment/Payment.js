import React, { useEffect, useState } from "react";
import {
  Address,
  Button,
  Container,
  Details,
  Info,
  Items,
  PaymentPrice,
  Section,
  Title,
} from "./Payment.styled";
import { useStateValue } from "../../StateProvider";
import { CheckoutProduct } from "../../components";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../redux/reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../../utils/axios";
import { EMPTY_BASKET } from "../../redux/actionTypes";
import { db } from "../../firebase";

const Payment = ({ ...props }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: EMPTY_BASKET });
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response =
        basket &&
        (await axios({
          method: "post",
          url: `/payments/create?total=${parseInt(
            getBasketTotal(basket) * 100
          )}`,
        }));
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  return (
    <Container {...props}>
      <Info>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <Section>
          <Title>
            <h3>Delivery Address</h3>
          </Title>
          <Address>
            <p>{user?.email}</p>
            <p>23 React Lane</p>
            <p>Los Angeles, CA</p>
          </Address>
        </Section>
        <Section>
          <Title>
            <h3>Review items and delivery</h3>
          </Title>
          <Items>
            {basket.map((item) => (
              <CheckoutProduct key={item.orderId} {...item} />
            ))}
          </Items>
        </Section>
        <Section>
          <Title>
            <h3>Payment Method</h3>
          </Title>
          <Details>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <PaymentPrice>
                <CurrencyFormat
                  renderText={(value) => <h4>Order Total: {value}</h4>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                />
                <Button
                  disabled={
                    processing ||
                    disabled ||
                    succeeded ||
                    !getBasketTotal(basket)
                  }
                >
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </Button>
              </PaymentPrice>
              {error && <div>{error}</div>}
            </form>
          </Details>
        </Section>
      </Info>
    </Container>
  );
};

export default Payment;
