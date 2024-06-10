const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // sandbox or live
  client_id: process.env.CLIENT_ID, // Здесь используйте переменную окружения
  client_secret: process.env.CLIENT_SECRET, // Здесь используйте переменную окружения
});

const checkout = async (req, res) => {
  const { amount } = req.body;

  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    },
    transactions: [
      {
        amount: {
          total: amount,
          currency: "USD",
        },
      },
    ],
  };

  try {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            res.redirect(payment.links[i].href);
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const paymentVerification = async (req, res) => {
  const { paymentId, PayerID } = req.query;

  const execute_payment_json = {
    payer_id: PayerID,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "10.00",
        },
      },
    ],
  };

  try {
    paypal.payment.execute(paymentId, execute_payment_json, function (
      error,
      payment
    ) {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        console.log(JSON.stringify(payment));
        res.send("Success");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = {
  checkout,
  paymentVerification,
};
