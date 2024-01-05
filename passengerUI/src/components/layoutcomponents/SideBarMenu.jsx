import React from "react";
import { Sidebar } from 'primereact/sidebar';
export default function SideBarMenu({setVisible, visible}) {
  return (
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
      <h2>Sidebar</h2>
      Menu Will appear here
    </Sidebar>
  );
}
