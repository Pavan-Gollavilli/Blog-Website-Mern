import React from 'react';
import { FaPenNib, FaLaptopCode, FaChartLine, FaCameraRetro } from 'react-icons/fa';

const services = [
  {
    icon: <FaPenNib size={30} />,
    title: 'Content Writing',
    description: 'High-quality blog posts, SEO-friendly articles, and compelling copy tailored for your audience.',
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: 'Web Development',
    description: 'Modern, responsive websites using React, Next.js, and more — optimized for performance.',
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines with proven strategies and keyword research.',
  },
  {
    icon: <FaCameraRetro size={30} />,
    title: 'Media & Branding',
    description: 'Custom logos, social media content, and branded visuals that make your blog stand out.',
  },
];

const Services = () => {
  return (
    <section className='bg-white py-40 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl lg:text-6xl font-bold mb-12 leading-snug text-black'>
          Our Services
        </h2>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300'
            >
            <div className='text-center mb-4 flex items-center justify-center gap-2'>
              <div className='mb-4 text-blue-400'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2 text-white'>{service.title}</h3>
            </div>
              <p className='text-gray-400 text-sm'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
