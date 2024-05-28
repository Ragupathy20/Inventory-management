import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [searchItem, setSearchItem] = useState([]);
  const [productList, setProductLists] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => setProductLists(json));
    } catch (error) {
      console.error(error);
    }
  }, []);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    try {
      fetch(`http://localhost:5000/products?q=${searchTerm}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => setProductLists(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mb-3 w-full flex lg:justify-end justify-center">
        <div className="relative mt-4 flex w-[350px] lg:w-[500px] items-stretch ">
          <input
            type="search"
            className="relative w-[400px]  m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-grey-700 outline-none transition duration-200 ease-in-out focus:z-[1] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto house-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6 m-auto lg:w-[1024px] w-full pb-16 pt-10 px-4">
        {productList.map((list) => (
          <div
            className="w-full max-w-sm bg-[#ffff] border border-gray-200 rounded-lg shadow"
            key={list.id}
          >
            <div className="w-full flex justify-center items-center bg-[#f8f8f8] lg:hover:drop-shadow-[0_0px_6px_#00000029] md:max-w-[384px] max-w-full lg:h-[500px] md:h-[350px] h-[216px]">
              <Link title="Aeroplane" to={`/inventory/${list.id}`}>
                <img
                  src={list.thumbnail}
                  className="bg-[#f8f8f8] lg:drop-shadow-none px-0 py-0 md:max-h-[500px] max-h-[216px]"
                  title="Aeroplane"
                  alt="Aeroplane"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="px-5 py-5 text-left">
              <Link to={`/inventory/${list.id}`}>
                <h5 className="text-xl font-semibold tracking-tight">
                  {list.title}
                </h5>
              </Link>
              <div className="flex items-center mt-2.5 mb-5 bg-beige">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {list.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">${list.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {productList.length === 0 ? (
        <div className="flex justify-center items-center md:pt-[125px] pt-[100px] md:pb-[252px] pb-[194px]">
          <div className="">
            <div className="flex justify-center items-center pb-[34px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="100px"
                height="100px"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
              </svg>
            </div>
            <div className="no-artwork-found-text">
              <span className="font-semibold text-black md:text-[30px] text-[26px]">
                No product Found
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
