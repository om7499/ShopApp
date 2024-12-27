import React from 'react';
import { Data } from '../data/products';
import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryparams = new URLSearchParams(location.search);

  // Extract the params
  const category = queryparams.get('category');
  const sort = queryparams.get('sort');

  // Filtering the products
  const filteredProduct = Data.filter((product) => 
    category ? product.category === category : true
  );

  // Sorting the products
  if (sort === 'asc') {
    filteredProduct.sort((a, b) => a.price - b.price);
  } else if (sort === 'des') {
    filteredProduct.sort((a, b) => b.price - a.price);
  }

  function HandlerFilter(key, value) {
    if (value) {
      queryparams.set(key, value);
    } else {
      queryparams.delete(key);
    }
    navigate(`?${queryparams.toString()}`); // Use `?` to maintain the query format
  }

  return (
    <div className=' bg-blue-100 pb-3 w-full'>
      <div className='text-center pt-5 pb-2'><span className=' text-blue-600  font-bold text-4xl border-b-4 border-blue-600'>Shop the best Summer Deals</span></div>
      {/* Category filter section */}
      <div className='category mx-5 my-2 text-lg text-blue-950'>
        <h3>Filter by category</h3>
      </div>
      {/* Buttons */}
      <div className="inline-flex rounded-md shadow-sm mx-5" role="group">
        <button
          type='button'
          onClick={() => HandlerFilter('category', "men's clothing")}
          className="px-4 py-3 text-sm font-medium text-white
           bg-orange-400 border  rounded-lg
            hover:bg-white hover:text-orange-500 focus:z-10
             focus:ring-2 focus:ring-orange-700 focus:text-orange-700"
        >
          Men's Clothing
        </button>
        <button
          type='button'
          onClick={() => HandlerFilter('category', "women's clothing")}
          className="px-4 py-3 text-sm font-medium text-white
           bg-pink-500 border mx-1 rounded-lg
            hover:bg-white hover:text-pink-500 focus:z-10
             focus:ring-2 focus:ring-pink-700 focus:text-pink-700"
        >  
          Women's Clothing
        </button>
        <button
          type='button'
          onClick={() => HandlerFilter('category', 'electronics')}
          className="px-4 py-3 text-sm font-medium text-white
           bg-gray-500 border  rounded-lg
            hover:bg-gray-100 hover:text-black focus:z-10
             focus:ring-2 focus:ring-black focus:text-black"
        >
          Electronics
        </button>
        <button
          type='button'
          onClick={() => HandlerFilter('category', 'jewelery')}
          className="px-4 py-3 text-sm font-medium text-white
           bg-blue-500 border mx-1 rounded-lg
            hover:bg-white hover:text-blue-700 
            focus:z-10 focus:ring-2 focus:ring-blue-700
             focus:text-blue-700"
        >
          Jewelery
        </button>
        <button
          type='button'
          onClick={() => HandlerFilter('category', null)}
          className="px-4 py-3 text-sm font-medium text-gray-900
           bg-yellow-500 border  rounded-l-lg
            hover:bg-gray-100 hover:text-yellow-600 focus:z-10 
            focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700"
        >
          All Products
        </button>
      </div>

      {/* Sorting Buttons */}
      <div className='sort-product mt-2 mb-3 mx-5 pb-2 border-b-2 border-gray-400'>
        <button
          type='button'
          onClick={() => HandlerFilter('sort', 'asc')}
          className="px-4 py-3 text-sm font-medium text-white
           bg-green-500 border  rounded-l-lg
            hover:bg-gray-100 hover:text-green-700 focus:z-10
             focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Low to High
        </button>
        <button
          type='button'
          onClick={() => HandlerFilter('sort', 'des')}
          className="px-4 py-3 text-sm font-medium text-white
           bg-red-500 border mx-1 rounded-l-lg
            hover:bg-gray-100 hover:text-red-700 focus:z-10 
            focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          High to Low
        </button>
      </div>

      {/* Product List */}
      <div className="container mx-auto ">
  <div className='mx-10'>
  <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 justify-center">
    {filteredProduct.length > 0 ? (
      filteredProduct.map((ele) => (
        <div key={ele.id} className="shadow-lg p-4 rounded-lg border border-black bg-white ">
          <img src={ele.image} alt={ele.title} className="w-full h-[350px]  rounded-md" />
          <h3 className="text-lg font-semibold mt-3 mb-2">{ele.title.slice(0, 10)}</h3>
          <p className="text-gray-600 text-sm">${ele.price}</p>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-3">No Products Found</p>
    )}
    
  </div>
  </div>
</div>
</div>
  )
}

export default Product;
