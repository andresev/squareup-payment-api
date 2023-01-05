'use client';
import styles from '../styles/Home.module.css';
import {
  ApplePay,
  GooglePay,
  CreditCard,
  PaymentForm,
} from 'react-square-web-payments-sdk';

export default function Home() {
  return (
    <div className={styles.container}>
      <PaymentForm
        applicationId="sandbox-sq0idb-KF-TWOnBphAS3NliBvAEeQ" //Change this when real
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          const response = await fetch('/api/pay', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              sourceId: token.token,
            }),
          });
          console.log(await response.json());
        }}
        createPaymentRequest={() => ({
          countryCode: 'US',
          currencyCode: 'USD',
          total: {
            amount: '1.00',
            label: 'Total',
          },
        })}
        locationId="L9TZK890FAC2C" //Change this when real
      >
        {/* <ApplePay className="mb-5" /> */}
        {/* <GooglePay className="mb-10" /> */}
        <CreditCard />
      </PaymentForm>
    </div>
  );
}
