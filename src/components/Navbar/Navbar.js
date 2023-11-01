import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import styled from "styled-components";
import RightNav from "./RightNav";

const Nav = styled.nav`
  width: 100%;
  background: white;
  height: 3rem;
  padding: 1rem;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <BiSearch style={{ transform: "scale(1.5)", marginRight: "2rem" }} />
        <BsBellFill style={{ transform: "scale(1.5)", marginRight: "2rem" }} />
        <FaUserCircle style={{ transform: "scale(1.5)" }} />
      </Nav>
      <RightNav />
    </>
  );
}
