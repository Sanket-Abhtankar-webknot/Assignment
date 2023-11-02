import React, { useContext } from "react";
import {
  AiFillHome,
  AiOutlineQuestionCircle,
  AiTwotoneSetting,
} from "react-icons/ai";
import { BsFillSendFill, BsLayoutTextWindowReverse } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import styled from "styled-components";
import { HBlock, RBlock, SBlock } from "../../Utils/styled";
import { TbWorldShare } from "react-icons/tb";
import { RiShieldUserFill } from "react-icons/ri";
import { AppContext } from "../../App";

const IconButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
`;

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
  const { setData, data } = useContext(AppContext);

  function checkNodeAvailability(data, node) {
    const array = [...data.columns.column1.taskIds];
    const isNodeAvailable = array.some((item) => item === node);
    return !isNodeAvailable;
  }

  function handleOnNodeAdd(type) {
    const types = {
      "HTTP trigger": {
        id: "node1",
        inputs: {
          url: "",
        },
        content: "HTTP trigger",
      },
      "Sign up Page": {
        id: "node2",
        inputs: {
          title: "",
          subtitle: "",
          logo: "",
          emailTitle: "",
          placeholder: "",
          buttonText: "",
        },
        content: "Sign up Page",
      },
      "Redirect user": {
        id: "node3",
        inputs: {
          url: "",
        },
        content: "Redirect user",
      },
    };

    const constructData = {
      ...data,
      nodes: {
        ...data.nodes,
        [types[type].id]: types[type],
      },
      columns: {
        ...data.columns,
        column1: {
          ...data.columns.column1,
          taskIds: [...data.columns.column1.taskIds, types[type].id],
        },
      },
    };

    return () => {
      setData((prevConfig) => {
        if (checkNodeAvailability(prevConfig, types[type].id)) {
          return {
            ...prevConfig,
            nodes: {
              ...prevConfig.nodes,
              [types[type].id]: types[type],
            },
            columns: {
              ...prevConfig.columns,
              column1: {
                ...prevConfig.columns.column1,
                taskIds: [
                  ...prevConfig.columns.column1.taskIds,
                  types[type].id,
                ],
              },
            },
          };
        }
        return prevConfig;
      });
    };
  }

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
      <div>
        <IconButton onClick={handleOnNodeAdd("HTTP trigger")}>
          <HBlock>
            <TbWorldShare style={{ transform: "scale(1.5)" }} />
          </HBlock>
        </IconButton>
        <IconButton onClick={handleOnNodeAdd("Sign up Page")}>
          <SBlock>
            <RiShieldUserFill style={{ transform: "scale(1.5)" }} />
          </SBlock>
        </IconButton>
        <IconButton onClick={handleOnNodeAdd("Redirect user")}>
          <RBlock>
            <BsFillSendFill style={{ transform: "scale(1.5)" }} />
          </RBlock>
        </IconButton>
      </div>
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
