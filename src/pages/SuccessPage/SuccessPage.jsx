import React from "react";

function SuccessPage() {
  return (
    <div className="container mx-auto p-8">
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Reservation Successful!</h1>
      <p className="mb-4">Thank you for your reservation. We look forward to hosting you!</p>
      <p className="mb-4">Reservation Details:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Check-in Date: May 25, 2023</li>
        <li>Check-out Date: May 30, 2023</li>
        <li>Number of Guests: 2</li>
        <li>Room Type: Double</li>
        <li>Special Requests: None</li>
      </ul>
      <p className="mb-4">If you have any further questions or need to make changes to your reservation, please contact us.</p>
      <a href="#" className="inline-block bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600">Back to Home</a>
    </div>
  </div>
  );
}

export default SuccessPage;
