const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYfNFBOE98GjPuiOCKlWMJy4Gvuqw1yWo3QGJtj0FVLgfh1DMrv31PQsYbHQOV13QEsexjEEqKlJRoRSAzx1igi00hvDaNpEh"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const { total: amount } = req.query;
  console.log("Payment request received for this amount, ", amount);
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
