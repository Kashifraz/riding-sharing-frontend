import RideCard from "./RideCard";
import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";

export default function EnrolledCourses() {
  const [loading, setLoading] = useState(false);
  const [rides, setRides] = useState([]);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get(`api/ride/list`);
      console.log(response);
      setRides(response.data);
      setLoading(false);
    })();
  }, []);
  return (
    <div className=" ">
      <h2 className="text-2xl font-bold mb-2">All Rides</h2>
      <div style={{ height: "500px", overflow: "scroll" }}>
        {!loading ? (
          <>
            {rides.length == 0 && <p>No rides found</p>}
            {rides.map((ride) => (
              <>
                <RideCard ride={ride} />
              </>
            ))}
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </div>
    </div>
  );
}
