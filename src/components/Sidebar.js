import React from "react";
import {Nav} from 'react-bootstrap'
import { HouseFill, Plus, ListCheck, BagFill, Film, BinocularsFill, GraphUpArrow, CreditCardFill } from "react-bootstrap-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-border">
        <Nav className="sidebar-items">
            <Nav.Link href="/" className="nav-link nav-side-icon"><HouseFill color="#61cc02" size={30}/>HOME</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><BagFill color="#61cc02" size={30}/>MANAGE</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><Plus color="#61cc02" size={30}/>ADD</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><Film color="#61cc02" size={30}/>CREATIVES</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><ListCheck color="#61cc02" size={30}/>LISTS</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><GraphUpArrow color="#61cc02" size={30}/>REPORTS</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><CreditCardFill color="#61cc02" size={30}/>ACCOUNTING</Nav.Link>
            <Nav.Link href="/" className="nav-link nav-side-icon"><BinocularsFill color="#61cc02" size={30}/>DISCOVER</Nav.Link>
          </Nav>
    </div>
  );
};

export default Sidebar;
