import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 "
        style={{ position: "absolute", width: "100%", height: "100% " }}
      >
        <div
          className="bg-red-500"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "url('https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg')",
          }}
        >
          <div className="p-16" style={{position:"relative"}}>
            <img
              className="mx-auto"
              src="http://mudaris.org/assets/img/Mudaris_Logo.png"
              width="100"
              alt=""
            />
          </div>
          <div className="px-28 text-white">
            <div className=" text-5xl font-medium leading-snug">
              Share Rides and Save Money
            </div>
            <div className="py-14 text-2xl leading-snug">
              This apps is build to promote ride sharing and divide ride cost.
            </div>
          </div>
        </div>
        <div className=" p-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
