import React from "react";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Navbar, Avatar } from "flowbite-react";


const TopNavigation = ({setVisible}) => {
  return (
    <Navbar fluid rounded className="shadow">
      <Navbar.Brand href="#">
        <Button
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={() => setVisible(true)}
          rounded
          text
          style={{color:"gray", fontSize:"20px"}}
          aria-label="Filter"
        />
        <img
          alt="Flowbite React Logo"
          className="mr-3 ml-8 h-6 sm:h-9"
          src="http://mudaris.org/assets/img/Mudaris_Logo.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mudaris
        </span>
      </Navbar.Brand>
      <div className="flex md:order-3">
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link> */}
        {/* <div className="p-inputgroup flex-1 w-32 rounded-full">
            <InputText placeholder="Keyword" className="rounded-full"/>
            <Button pill icon={<FontAwesomeIcon icon={faSearch} />} className="rounded-full" />
          </div> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;
