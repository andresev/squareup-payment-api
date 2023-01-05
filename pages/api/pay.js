import { Client, Environment } from 'square';
import { randomUUID } from 'crypto';

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi, locationsApi, catalogApi, customersApi, ordersApi } =
  new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Sandbox,
  });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: 100,
      },
    });
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}
