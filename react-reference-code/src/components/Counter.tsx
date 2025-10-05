import React from "react";

const Counter: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <p className="text-gray-600 text-sm">Habits Completed Today:</p>
      <p className="text-2xl font-bold text-green-600">1 / 3</p>
    </div>
  );
};

export default Counter;
