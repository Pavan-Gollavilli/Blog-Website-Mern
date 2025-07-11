import React from 'react'
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom'
import SliderBar from '../Components/SliderBar';

const SingleBlog = () => {
  const data = useLoaderData();
  const {title,image,category,author,published_date,content,reading_time} = data[0];
  return (
    <div>
      <div className='py-40 -h-screenmin bg-white flex flex-col md:flex-row gap-8'>
      <div className='max-w-5xl mx-auto p-6'>
        <img src={image} alt={title} className='w-full h-64 object-cover mb-4' />
        <h1 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h1>
        <p className='text-gray-600 mb-2'>{category}</p>
        <p className='text-gray-600 mb-2'><FaUser className='inline-flex items-center mr-2'/> Author: {author}</p>
        <p className='text-gray-600 mb-2'><FaCalendar className='inline-flex items-center mr-2'/>Published on: {published_date}</p>
        <p className='text-gray-600 mb-2'><FaClock className='inline-flex items-center mr-2'/>Reading Time: {reading_time}</p>
        <div className='text-base text-gray-600'>
          <p>{content}</p>
        </div>
        <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo, minus reiciendis voluptatum vero quis est atque possimus saepe cum, non, ducimus ad eaque voluptatibus at iure accusamus aliquam aspernatur tempora quas adipisci eum! Repudiandae vero asperiores itaque consequatur! In obcaecati neque temporibus incidunt iusto voluptatem, optio doloremque sunt eveniet consequatur, harum modi. Ab accusantium voluptatem, perspiciatis numquam mollitia maxime quod facere expedita nulla inventore aliquam aperiam tenetur. Dolorum corrupti quisquam eaque tempora, aut porro sed id cum. Quisquam dicta at debitis, dolorem saepe rerum. Iure quas tempore nihil dolorum accusantium quidem, ducimus laborum quam, eos magnam, aliquid tenetur porro!</p>
        <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo, minus reiciendis voluptatum vero quis est atque possimus saepe cum, non, ducimus ad eaque voluptatibus at iure accusamus aliquam aspernatur tempora quas adipisci eum! Repudiandae vero asperiores itaque consequatur! In obcaecati neque temporibus incidunt iusto voluptatem, optio doloremque sunt eveniet consequatur, harum modi. Ab accusantium voluptatem, perspiciatis numquam mollitia maxime quod facere expedita nulla inventore aliquam aperiam tenetur. Dolorum corrupti quisquam eaque tempora, aut porro sed id cum. Quisquam dicta at debitis, dolorem saepe rerum. Iure quas tempore nihil dolorum accusantium quidem, ducimus laborum quam, eos magnam, aliquid tenetur porro!</p>
        <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo, minus reiciendis voluptatum vero quis est atque possimus saepe cum, non, ducimus ad eaque voluptatibus at iure accusamus aliquam aspernatur tempora quas adipisci eum! Repudiandae vero asperiores itaque consequatur! In obcaecati neque temporibus incidunt iusto voluptatem, optio doloremque sunt eveniet consequatur, harum modi. Ab accusantium voluptatem, perspiciatis numquam mollitia maxime quod facere expedita nulla inventore aliquam aperiam tenetur. Dolorum corrupti quisquam eaque tempora, aut porro sed id cum. Quisquam dicta at debitis, dolorem saepe rerum. Iure quas tempore nihil dolorum accusantium quidem, ducimus laborum quam, eos magnam, aliquid tenetur porro!</p>
        <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo, minus reiciendis voluptatum vero quis est atque possimus saepe cum, non, ducimus ad eaque voluptatibus at iure accusamus aliquam aspernatur tempora quas adipisci eum! Repudiandae vero asperiores itaque consequatur! In obcaecati neque temporibus incidunt iusto voluptatem, optio doloremque sunt eveniet consequatur, harum modi. Ab accusantium voluptatem, perspiciatis numquam mollitia maxime quod facere expedita nulla inventore aliquam aperiam tenetur. Dolorum corrupti quisquam eaque tempora, aut porro sed id cum. Quisquam dicta at debitis, dolorem saepe rerum. Iure quas tempore nihil dolorum accusantium quidem, ducimus laborum quam, eos magnam, aliquid tenetur porro!</p>
        <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo, minus reiciendis voluptatum vero quis est atque possimus saepe cum, non, ducimus ad eaque voluptatibus at iure accusamus aliquam aspernatur tempora quas adipisci eum! Repudiandae vero asperiores itaque consequatur! In obcaecati neque temporibus incidunt iusto voluptatem, optio doloremque sunt eveniet consequatur, harum modi. Ab accusantium voluptatem, perspiciatis numquam mollitia maxime quod facere expedita nulla inventore aliquam aperiam tenetur. Dolorum corrupti quisquam eaque tempora, aut porro sed id cum. Quisquam dicta at debitis, dolorem saepe rerum. Iure quas tempore nihil dolorum accusantium quidem, ducimus laborum quam, eos magnam, aliquid tenetur porro!</p>
        <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo, minus reiciendis voluptatum vero quis est atque possimus saepe cum, non, ducimus ad eaque voluptatibus at iure accusamus aliquam aspernatur tempora quas adipisci eum! Repudiandae vero asperiores itaque consequatur! In obcaecati neque temporibus incidunt iusto voluptatem, optio doloremque sunt eveniet consequatur, harum modi. Ab accusantium voluptatem, perspiciatis numquam mollitia maxime quod facere expedita nulla inventore aliquam aperiam tenetur. Dolorum corrupti quisquam eaque tempora, aut porro sed id cum. Quisquam dicta at debitis, dolorem saepe rerum. Iure quas tempore nihil dolorum accusantium quidem, ducimus laborum quam, eos magnam, aliquid tenetur porro!</p>
        </div>
        <div>
          <div className='lg:w-3/4 text-black bg-gray-100 p-6 rounded-lg shadow-lg'>
            <SliderBar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog