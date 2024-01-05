import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";

export default function RideCard({ ride, show }) {
  return (
    <>
      <div className=" w-2xl flex my-3 ">
        <div
          className="h-48 lg:h-auto lg:w-28 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=sph')",
          }}
        ></div>
        <div className="border-r border-b w-full border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                className="mx-2 text-gray-300"
                viewBox="0 0 448 512"
              >
                <path d="M248 48V256h48V58.7c23.9 13.8 40 39.7 40 69.3V256h48V128C384 57.3 326.7 0 256 0H192C121.3 0 64 57.3 64 128V256h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48h48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32V384H352v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288H48z" />
              </svg>{" "}
              {ride.seats} Seats only with price of
              <b className="mx-1">Rs.{ride.price}</b> per seat
            </p>
            <div className="text-gray-900 font-normal text-lg mb-2">
              <b>From</b> {ride.pickup} <b>To</b> {ride.destination}
            </div>
            <p className="text-gray-700 text-base">
              {ride.description}
              <br />
              <b>Time</b> will be {ride.time}{" "}
              {!show && (
                <Link
                  className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  to={`/booking/create/${ride.id}`}
                >
                  book Now
                </Link>
              )}
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4JLMCBM942LngvfKbc86kIpigzTIwvhkXp-XANccag&s"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{ride.username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
