import React from 'react';

const CategorySelection = ({ onSelectCategory, activateCategory }) => {
  const categories = ["Startups", "AI", "Apps","Security", "Tech"];

  return (
    <div className='px-4 mb-8 lg:space-x-10 flex flex-wrap justify-center items-center border-b-2 py-5 text-gray-900'>
      <button
        onClick={() => onSelectCategory(null)}
        className={`lg-ml-12 mr-4 ${!activateCategory ? "text-orange-500 font-semibold" : "text-gray-700"}`}
      >
        All
      </button>
      {
        categories.map((category) => (
          <button
            onClick={() => onSelectCategory(category)}
            className={`mr-4 ${activateCategory === category ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
            key={category}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
};

export default CategorySelection;
