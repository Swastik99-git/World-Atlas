import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore The World, One Country at a time{" "}
          </h1>
          <p>
            Discover the histroy, culture, and beauty of every nation. 
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <IoArrowForwardOutline />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.jpg"
            alt="Worlds beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
