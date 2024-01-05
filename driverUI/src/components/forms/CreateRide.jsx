import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CreateRide = () => {
  const [formData, setFormData] = useState({
    username: "",
    pickup: "",
    destination: "",
    description: "",
    seats: null,
    price: null,
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [ride, setRide] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8081/api/ride/post",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setShow(true);
      setRide(res.data);
      setLoading(false);
    } catch (e) {
      if (e.response) {
        setLoading(false);
      }
    }
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3 className="text-xl font-bold">Enter Ride Details</h3>
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="username"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Username"
              onChange={handleFieldChange}
              value={formData.username}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="pickup"
              name="pickup"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Pickup Location"
              onChange={handleFieldChange}
              value={formData.pickup}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="destination"
              name="destination"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Destination"
              value={formData.destination}
              onChange={handleFieldChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleFieldChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="number"
              id="seats"
              name="seats"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter seats"
              value={formData.seats}
              onChange={handleFieldChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="number"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleFieldChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="time"
              id="time"
              name="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter time"
              onChange={handleFieldChange}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm w-full  px-5 py-2.5 text-center"
          >
            Post Ride Now
          </button>
          {!loading && (
            <>
              {show && (
                <>
                  <div
                    className="mt-4 flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span className="font-medium">Success alert!</span> Ride
                      Successfully created with id {ride.id}.{" "}
                      <Link
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                        to={`/ride/show/${ride.id}`}
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateRide;
