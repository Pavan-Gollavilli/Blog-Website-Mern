import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-900'>
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>

          {/* Section 1 */}
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Category</p>
            <ul className='mt-4 space-y-2'>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Startups</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>AI</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Apps</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Security</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Tech</a></li>
            </ul>
          </div>

          {/* Section 2 */}
          
            <div>
            <p className='font-medium tracking-wide text-gray-300'>Services</p>
            <ul className='mt-4 space-y-2'>
                <li><a href='/' className='text-gray-400 hover:text-orange-500'>Content Writing</a></li>
                <li><a href='/' className='text-gray-400 hover:text-orange-500'>Web Development</a></li>
                <li><a href='/' className='text-gray-400 hover:text-orange-500'>SEO Optimization</a></li>
                <li><a href='/' className='text-gray-400 hover:text-orange-500'>Media & Brandingg</a></li>
            </ul>
            </div>

          {/* Section 3 */}
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Social Media</p>
            <ul className='mt-4 space-y-2'>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Facebook</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Twitter</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Instagram</a></li>
              <li><a href='/' className='text-gray-400 hover:text-orange-500'>Linked</a></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <p className='font-medium tracking-wide text-gray-300'>Follow for updates</p>
            <div className='mt-4 flex flex-col '>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full h-12 px-4 bg-white border border-gray-300 rounded shadow-sm md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none transition duration-200'
              />
              <button className='mt-3 hover:bg-orange-600 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md focus:outline-none border'>
                Follow
              </button>
            </div>
          </div>

        </div>
    </div>
    <div className='bg-gray-900 py-4 text-center text-gray-400 mt-2'>
            <p className='text-sm'>© 2025 Our Blog Website. All rights reserved.</p>
    </div> 
    </div>
  );
};

export default Footer;
