import React from "react";
import { Route, Routes } from "react-router-dom";
//Layouts
import GuestLayout from "../layouts/GuestLayout";
//Components
import CreateRide from "../components/forms/CreateRide";
import AllRides from "../components/pages/rides/AllRides";
import ViewRide from "../components/forms/ViewRide";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}> 
        <Route path="/" element={<CreateRide />} />
        <Route path="/ride/show/:id" element={<ViewRide />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
