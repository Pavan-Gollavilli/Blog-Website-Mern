import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import BannerImg from "../assets/Text-Book-Background.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat px-4 py-32"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="bg-opacity-0 p-10 rounded text-center text-white">
        <h1 className="text-4xl font-bold mb-4 lg:text-7xl leading-snug">Welcome to Our Website</h1>
        <p className="text-lg mb-5 mx-auto">Discover amazing content and connect with us!</p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded transition duration-300"
        >
          Learn More <FaArrowRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
