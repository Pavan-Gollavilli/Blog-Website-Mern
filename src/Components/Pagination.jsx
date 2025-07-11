import React from 'react'

const Pagination = ({onPageChange,currentPage,blogs,blogsperPage}) => {
const totalBlogs = blogs.length;
const totalPages = Math.ceil(totalBlogs / blogsperPage);
// console.log(totalBlogs, totalPages);
const renderPaginationLinks = ()=> {
    return Array.from({ length: totalPages }, (_, index) => (index + 1)).map((pageNumber) =>(
        <li className={pageNumber === currentPage ? 'activePagination' : ''} key={pageNumber}>
            <a href='#' onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
        </li>
    ) )}
  return (
    <ul className='pagination flex justify-center items-center gap-4 my-8 flex-wrap'>
        <li>
            <button onClick={()=> onPageChange(currentPage-1)} disabled={currentPage === 1} className='font-semibold'>Previous</button>
        </li>
        <div className='flex gap-2'>
            {renderPaginationLinks()}
        </div>
        <li>
            <button onClick={()=> onPageChange(currentPage + 1)} disabled={currentPage === totalPages}  className='font-semibold'>Next</button>
        </li>
    </ul>
  )
}

export default Pagination