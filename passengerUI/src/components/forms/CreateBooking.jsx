import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import RideCard from "../pages/rides/RideCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const CreateRide = () => {
  const [formData, setFormData] = useState({
    ride_id: "",
    user_name: "",
    user_phone: "",
    seats: null,
  });

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [ride, setRide] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get(`api/ride/show/${id}`);
      console.log(response);
      setRide(response.data);
      setFormData({
        ride_id: response.data.id,
      });
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8082/api/booking/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setShow(true);
      setLoading(false);
      setFormData({
        ride_id: "",
        user_name: "",
        user_phone: "",
        seats: null,
      });
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
      {!loading && ride != undefined ? (
        <>
          <RideCard ride={ride} show={true} />
        </>
      ) : (
        <>Loading...</>
      )}
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3 className="text-xl font-bold">Enter Booking Details</h3>
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Username"
              onChange={handleFieldChange}
              value={formData.user_name}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="user_phone"
              name="user_phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter phone"
              onChange={handleFieldChange}
              value={formData.user_phone}
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
            <br />
            {!loading && formData.seats != null && (
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Rs {formData.seats * ride.price} total Payable amount
              </span>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm w-full  px-5 py-2.5 text-center"
          >
            Confirm Booking
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
                      <span className="font-medium">Success alert!</span>{" "}
                      Booking Created Successfully.{" "}
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
