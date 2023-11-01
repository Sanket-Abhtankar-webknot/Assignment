import React from "react";
import {
  AiFillHome,
  AiOutlineQuestionCircle,
  AiTwotoneSetting,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import styled from "styled-components";

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Nav = styled.div`
  padding: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  min-height: 100vh;
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 3px 0 0 rgba(0, 0, 0, 0.1);
`;

export default function RightNav() {
  return (
    <Nav>
      <IconsContainer>
        <AiFillHome
          style={{
            color: "rgba(0,0,0,0.3)",
            transform: "scale(1.5)",
            marginBottom: "2rem",
          }}
        />
        <BsLayoutTextWindowReverse style={{ transform: "scale(1.5)" }} />
      </IconsContainer>
      <IconsContainer>
        <HiUsers style={{ transform: "scale(1.5)", marginBottom: "2rem" }} />
        <AiTwotoneSetting
          style={{ transform: "scale(1.5)", marginBottom: "2rem" }}
        />
        <AiOutlineQuestionCircle style={{ transform: "scale(1.5)" }} />
      </IconsContainer>
    </Nav>
  );
}
