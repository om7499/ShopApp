import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-sceen text-4xl bg-blue-100'>
     {/* Top Bar */}
     <header className="p-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="p-2 rounded-md w-[70%]"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-6 flex justify-center items-center">
          <img
            src="./src/assets/Shop-Banner.avif"
            alt="Promotional Banner"
            className="rounded-md shadow-md w-full h-[400px]"
          />
        </div>
      </section>

       {/* Categories */}
       <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
          {[
            { name: "Electronics", icon: "📱" },
            { name: "Fashion", icon: "👗" },
            { name: "Home Decor", icon: "🛋️" },
            { name: "Sports", icon: "⚽" },
          ].map((category, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col items-center p-4 rounded-md shadow-md hover:bg-gray-200">
              <span className="text-3xl mb-2">{category.icon}</span>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Trending Products */}
       <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["women's clothing", "men's clothing", 'electronics', 'jewelery'].map((product) => (
              <div
                key={product}
                className="bg-gray-100 rounded-md p-4 shadow-sm hover:shadow-md">
                <div className="h-40 bg-blue-100 flex justify-center items-center rounded-md mb-2">
                  <p className="text-2xl text bg-blue-400 px-3 py-2 rounded-lg font-bold"> {product}</p>
                </div>
                <button className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
