import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (payload.error) {
      setError(payload.error.message);
      setProcessing(false);
    } else {
      // Send the payment method and amount to your server to create a charge
      // Call setSuccess(true) if the charge was successful, or setError(error) if there was a problem
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Donate to our cause</h3>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={donationAmount}
          onChange={e => setDonationAmount(e.target.value)}
          min="0"
        />
      </div>
      <CardElement />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success ? (
        <p style={{ color: 'green' }}>Donation successful!</p>
      ) : (
        <button disabled={processing}>
          {processing ? 'Processing...' : 'Donate'}
        </button>
      )}
    </form>
  );
};

export default DonationForm;
