import React from 'react'
import BlogPage from '../Components/BlogPage'
import BannerImg from "../assets/Text-Book-Background.png"

const Blogs = () => {
  return (
    <>
    <div
      className="bg-cover bg-center bg-no-repeat px-4 py-32"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className=" bg-opacity-0 p-10 rounded text-center text-white">
        <h1 className="text-4xl font-bold mb-4 lg:text-7xl leading-snug">Welcome to Our Blogs</h1>
        <p className="text-lg mb-5 mx-auto">Discover amazing content and connect with us!</p>
      </div>
    </div>
      {/* All blogs container */}
      <div className='max-w-7xl mx-auto'>
          <BlogPage/>
      </div>
    </>
  )
}

export default Blogs