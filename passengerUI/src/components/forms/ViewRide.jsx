import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
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

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [ride, setRide] = useState([]);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get(`api/ride/show/${id}`);
      console.log(response);
      setRide(response.data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (ride.id != undefined) {
        setBookingLoading(true);
        const response = await axios.get(`api/booking/list/${ride.id}`);
        console.log(response);
        setBooking(response.data);
        setBookingLoading(false);
      }
    })();
  }, [ride]);

  return (
    <>
      <h3 className="text-xl mb-2">
        <b>Ride Details</b>
      </h3>
      <div className="w-full mb-5 p-4 bg-white border border-gray-200 rounded-lg shadow  ">
        {!loading ? (
          <>
            <p>
              <b>pickup</b>: {ride.pickup}, <b>destination</b>:{" "}
              {ride.destination},
              <br /> <b>description</b>: {ride.description}, <br /> <b>time</b>:{" "}
              {ride.time}, <b>seats</b>: {ride.seats}, <b>price</b>:{" "}
              {ride.price}, <b>username</b>: {ride.username}
            </p>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
      <h3 className="text-xl mb-2">
        <b>Bookings</b>
      </h3>
      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow  ">
        {!bookingLoading ? (
          <>
            <ul className="max-w-full divide-y divide-gray-200">
              {booking.length == 0 &&
              <p>No bookings found</p>
              }
              {booking.map((record) => (
                <>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          width="35"
                          viewBox="0 0 640 512"
                        >
                          <path d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          {record.user_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                         {record.user_phone}
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                         {record.seats}{" "} total seats
                        </p>
                      </div>
                      <div className="inline-flex items-center text-center text-base font-semibold text-gray-900">
                        Rs{record.seats * ride.price} {""} total
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default CreateRide;
