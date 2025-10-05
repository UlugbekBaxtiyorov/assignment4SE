import React from "react";

const InstagramPost: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 text-center mt-6 text-gray-700 text-sm">
      <p>Share your progress on Instagram! 🌟</p>
      <button className="mt-2 bg-pink-500 text-white px-3 py-1 rounded-lg hover:bg-pink-600 transition">
        Share
      </button>
    </div>
  );
};

export default InstagramPost;
