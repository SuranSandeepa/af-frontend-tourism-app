import React from 'react';

const TourRegisterSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour Registration Success!</h1>
        <p className="text-gray-600 mb-4">Thank you for registering for the tour. A representative will get back to you soon.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">Go back to homepage</a>
      </div>
    </div>
  );
}

export default TourRegisterSuccess;
