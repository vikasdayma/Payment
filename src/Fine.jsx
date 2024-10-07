import React, { useState } from 'react';

const Fine = () => {
  // Sample fine amount for demonstration purposes
  const [fineAmount, setFineAmount] = useState(120);
  const [loading, setLoading] = useState(false);
  const [paymentPortalVisible, setPaymentPortalVisible] = useState(false);

  const handlePayFine = () => {
    setLoading(true);
    // Simulate a 5-second loading period
    setTimeout(() => {
      setLoading(false);
      setPaymentPortalVisible(true);
    }, 5000);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center text-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Library Fine Payment</h1>
        
        <div className="mb-6 text-center">
          <p className="text-xl text-gray-200">Your current fine amount is:</p>
          <p className={`text-4xl font-semibold ${fineAmount > 150 ? 'text-red-500' : 'text-green-500'}`}>
          ₹{fineAmount.toFixed(2)}
          </p>
        </div>

        {fineAmount > 150 && (
          <div className="bg-red-600 text-gray-100 p-4 rounded-md mb-6 text-center">
            <p className="font-semibold">
              Your fine exceeds  ₹150. You are not eligible to issue books until the fine is reduced.
            </p>
          </div>
        )}

        {!paymentPortalVisible ? (
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-gray-100 p-3 rounded-md font-semibold transition duration-300"
            onClick={handlePayFine}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Fine'}
          </button>
        ) : (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Payment Portal</h2>
            <p className="text-center mb-4">Select a payment method:</p>
            <div className="flex flex-col items-center">
              <button className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-gray-100 p-3 rounded-md mb-2">
                PayPal
              </button>
              <button className="w-full max-w-xs bg-yellow-600 hover:bg-yellow-700 text-gray-100 p-3 rounded-md mb-2">
                Credit/Debit Card
              </button>
              <button className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-gray-100 p-3 rounded-md mb-2">
                UPI Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fine;
