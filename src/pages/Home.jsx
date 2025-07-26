import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import SliderBar from '../Components/SliderBar';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blog-website-mern-backend-5u9l.onrender.com/blogs") 
      .then(res => res.json())
      .then(data => setBlogs(data.slice(0, 12))) 
  }, []);

  return (
    <>
    <Banner/>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
              <div>
                <img src={blog.image} alt={blog.title} className='w-full' />
              </div>
              <h3 className='mt-4 mb-2 font-bold cursor-pointer hover:text-blue-600'>{blog.title}</h3>
              <p className='mb-2 text-gray-600'>
                <FaUser className='inline-flex items-center mr-2' />
                {blog.author}
              </p>
              <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
            </Link>
          ))}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-4">
            <Link
              to="/blogs"
              className='bg-orange-600 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded'
            >
              View All Blogs
            </Link>
          </div>

        </div>
        <div>
          <SliderBar/>
        </div>
      </div>
    </>
  );
};

export default Home;
