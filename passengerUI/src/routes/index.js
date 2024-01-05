import React from "react";
import { Route, Routes } from "react-router-dom";
//Layouts
import GuestLayout from "../layouts/GuestLayout";
//Components
import CreateBooking from "../components/forms/CreateBooking";
import AllRides from "../components/pages/rides/AllRides";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route path="/" element={<AllRides />} />
        <Route path="/booking/create/:id" element={<CreateBooking />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
