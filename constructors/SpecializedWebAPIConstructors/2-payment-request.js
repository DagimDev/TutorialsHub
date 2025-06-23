// PaymentRequest
// Definition:
// Handles web payments through the Payment Request API.

// Deep Dive:
const payment = new PaymentRequest(
  [{
    supportedMethods: 'https://example.com/pay',
    data: { merchantId: '123' }
  }],
  {
    total: {
      label: 'Total',
      amount: { currency: 'USD', value: '10.00' }
    }
  }
);

payment.show().then(response => {
  // Process payment
});
// Components:

// Payment methods

// Payment details

// Payment options

// Use Cases:

// E-commerce checkouts

// Digital payments

// Subscription flows