import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SimilarProduct = (props) => {
  const [Lists, setList] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const respose = await fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await respose.json();
      setList(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="px-20">
      <h2 className="text-[#221B09] font-bold text-[22px] lg:text-[30px] text-left py-4">
        Similar Product
      </h2>
      <Swiper spaceBetween={50} slidesPerView={5}>
        {Lists?.slice(props.id, 20).map((list) => (
          <SwiperSlide key={list.id}>
            <img
              className="border-solid border-2 border-sky-500"
              src={list.thumbnail}
              alt={list.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
