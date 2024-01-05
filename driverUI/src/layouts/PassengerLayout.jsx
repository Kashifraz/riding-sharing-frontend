import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavigation from "../components/layoutcomponents/TopNavigation";
import SideBarMenu from "../components/layoutcomponents/SideBarMenu";

const CourseLayout = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-gray-50">
      <TopNavigation setVisible={setVisible} />
      <SideBarMenu setVisible={setVisible} visible={visible} />
      <Outlet />
    </div>
  )
}

export default CourseLayout;
