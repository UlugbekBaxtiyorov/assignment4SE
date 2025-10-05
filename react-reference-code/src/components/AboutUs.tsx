import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-md p-6 mt-10 text-center">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">About This App</h2>
      <p className="text-gray-600 mb-3">
        The <strong>Daily Habit Tracker</strong> is a prototype built for a
        User-Centered Design (UCD) assignment. It demonstrates iterative design,
        user feedback, and visual improvements.
      </p>
      <p className="text-gray-600">
        Version 1.0 – From paper sketches to an interactive React prototype.
      </p>
      <p className="mt-4 text-sm text-gray-500">Built with React + Tailwind 💡</p>
    </div>
  );
};

export default AboutUs;
