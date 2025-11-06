// components/PayPalButton.tsx
'use client';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function PayPalButton() {
  // Replace 'YOUR_CLIENT_ID' with your actual PayPal client ID
  // You can also use environment variables for better security
   const CLIENT_ID = process.env.PAYPAL_CLIENT_ID || 'ARv1YYhPiyyEWw1RyfKekJpJYNTEH6YNeobn2lA4uvAQBBeE30O-cRxPHJNkgJBSutIN684AKFB9TA_n';
  return (
    <PayPalScriptProvider options={{ "clientId": CLIENT_ID, currency: "USD" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [{
              reference_id: 'unique_order_id', // Replace with a unique order ID
              description: 'Product Description', // Replace with your product description
              amount: {
                currency_code: "USD",
                value: '100.00', // Replace with the actual amount
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: '100.00' // Replace with the actual item total
                  }
                }
              }
            }],
            application_context: {
              shipping_preference: 'NO_SHIPPING', // Set to 'NO_SHIPPING' if you don't need shipping
            },

          });
        }}
        onApprove={async (data) => {
          const response = await fetch('http://localhost:8000/api/paypal/capture-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderID: data.orderID }),
          });

          const result = await response.json();
          if (result.success) {
            alert('Payment captured!');
          } else {
            alert('Payment failed.');
          }
        }}
      />
    </PayPalScriptProvider>
  );
}
