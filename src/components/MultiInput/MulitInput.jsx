import { useState } from 'react';

function MultiInput({ label, inputs, setInputs }) {
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor={label.toLowerCase()}
      >
        {label}
      </label>
      {inputs.map((input, index) => (
        <div key={index} className="relative mb-4">
          <input
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            id={`${label.toLowerCase()}-${index}`}
            name={`${label.toLowerCase()}-${index}`}
            placeholder={`Enter ${label.toLowerCase()} ${index + 1}`}
            value={input}
            onChange={(event) => handleChange(event, index)}
          />
          <button
            type="button"
            className="absolute top-0 right-0 mt-3 mr-3 text-red-500"
            onClick={() => handleRemoveInput(index)}
          >
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 1a9 9 0 100 18 9 9 0 000-18zM6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddInput}
      >
        Add {label.toLowerCase()}
      </button>
    </div>
  );
}

export default MultiInput;