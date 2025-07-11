import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCards = ({blogs,currentPage,selectedCategory,blogsperPage}) => {
    const filteredBlogs = blogs
    .filter((blogs)=> !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * blogsperPage, currentPage * blogsperPage);

    console.log(filteredBlogs);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {
            filteredBlogs.map((blog)=>
                <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                    <div>
                        <img src={blog.image} alt={blog.title} className='w-full' />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold cursor-pointer hover:text-blue-600'>{blog.title}</h3>
                    <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                    <p className='text-sm text-gray-500'>Published:{blog.published_date}</p>
                </Link>)
        }
    </div>
  )
}

export default BlogCards