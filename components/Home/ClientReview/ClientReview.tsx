"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ClientReviewCard";
import ClientReviewCard from "./ClientReviewCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const ClientReview = () => {
  return (
    <div id="reviews" className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        What people say about us 
      </h1>
        {/* Sliders */}
        <div className="mt-16 mx-auto w-[80%]  ">
          <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
          >
            <ClientReviewCard
              reviewTitle="Great Work!"
              userName="Jassica Doe"
              userImage="/images/c1.png"
              role="UI UX Designer"
            />
            <ReviewCard
              reviewTitle="Creative Work!"
              userName="Jany Doe"
              userImage="/images/c2.png"
              role="Web Developer"
            />
            <ReviewCard
              reviewTitle="Great Work!"
              userName="Jason Doe"
              userImage="/images/c3.png"
              role="App Developer"
            />
          </Carousel>
        </div>
      </div>
  );
};

export default ClientReview;
