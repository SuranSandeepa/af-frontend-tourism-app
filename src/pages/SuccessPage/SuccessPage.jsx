import React from "react";

function SuccessPage() {
  return (
    <div class="container mx-auto p-8">
    <div class="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h1 class="text-2xl font-bold mb-4">Reservation Successful!</h1>
      <p class="mb-4">Thank you for your reservation. We look forward to hosting you!</p>
      <p class="mb-4">Reservation Details:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Check-in Date: May 25, 2023</li>
        <li>Check-out Date: May 30, 2023</li>
        <li>Number of Guests: 2</li>
        <li>Room Type: Double</li>
        <li>Special Requests: None</li>
      </ul>
      <p class="mb-4">If you have any further questions or need to make changes to your reservation, please contact us.</p>
      <a href="#" class="inline-block bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600">Back to Home</a>
    </div>
  </div>
  );
}

export default SuccessPage;
