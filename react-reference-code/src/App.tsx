import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Counter from "./components/Counter";
import InstagramPost from "./components/InstagramPost";

const Home: React.FC = () => {
  const habits = [
    { id: 1, name: "Drink Water", done: true },
    { id: 2, name: "Exercise", done: false },
    { id: 3, name: "Read 10 Pages", done: false },
  ];

  const completed = habits.filter((h) => h.done).length;
  const progress = Math.round((completed / habits.length) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6 mt-6 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-2">
        Daily Habit Tracker
      </h1>
      <p className="text-center text-green-600 font-medium mb-4">
        Keep it up! You’re doing great 💪
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <ul className="space-y-3">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <span className="text-gray-800">{habit.name}</span>
            <input
              type="checkbox"
              checked={habit.done}
              readOnly
              className="w-5 h-5 accent-green-500 cursor-pointer"
            />
          </li>
        ))}
      </ul>

      <button className="w-full bg-blue-500 text-white font-medium py-2 mt-6 rounded-lg hover:bg-blue-600 transition">
        + Add Habit
      </button>

      <Counter />
      <InstagramPost />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
