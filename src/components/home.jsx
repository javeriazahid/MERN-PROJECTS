// home.jsx
import React from "react";

const Home = ({ setPage }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Af7cAuRjPPic1h7zbMCNUthfTyozsUTh1-kUdjy7d034bkmcvVN9N2uepR9bzW2yhLBw&s')",
      }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-xl shadow-lg max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 font-serif text-yellow-300 drop-shadow-lg">
          Welcome to ShoeStock
        </h1>
        <p className="text-xl font-light text-gray-200 drop-shadow mb-6">
          Discover premium leftover and wholesale branded shoes at unbeatable prices.
        </p>
        <button
          onClick={() => setPage("products")}
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
