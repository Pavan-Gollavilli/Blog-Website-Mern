import React, {useEffect } from 'react'
import { useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import SliderBar from './SliderBar'

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const blogsperPage = 12; // Number of blogs to display per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activateCategory, setActiveCategory] = useState(null);

  useEffect(()=>{
    async function fetchBlogs() {
      let url = `https://blog-website-mern-backend-5u9l.onrender.com/blogs?page=${currentPage}&limit=${blogsperPage}`;

      // filter by category
      if (selectedCategory){
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setBlogs(data);
    }
    fetchBlogs(); 
  } ,[currentPage, blogsperPage, selectedCategory]);

  // page change button
  const handlePageChange = (pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // Reset to the first page when category changes
      setActiveCategory(category);
    }
  
  return (
    <>
        {/* category section */}

        <div >
           <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activateCategory={activateCategory}/>
        </div>

        {/* blogCards section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} blogsperPage={blogsperPage} />
            <div>
              <SliderBar/>
            </div>
        </div>


        {/* pagination section */}
        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} blogsperPage={blogsperPage} />
        </div>

    </>
  )
}

export default BlogPage