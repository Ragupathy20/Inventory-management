import React, { useEffect, useState } from "react";
// import Lists from "../Json/HouseListingData.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  const [Lists, setList] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => setList(json));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <Carousel
      autoPlay
      emulateTouch
      showArrows={false}
      showThumbs={false}
      infiniteLoop
    >
      {Lists?.slice(1, 10).map((list, i) => (
        <div className="" key={i}>
          <img className="h-[88vh]" src={list.images[0]} alt="carousel" />
        </div>
      ))}
    </Carousel>
  );
};
