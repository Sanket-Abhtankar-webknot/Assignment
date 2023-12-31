import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { AiOutlineClose } from "react-icons/ai";
import HTTPForm from "../forms/HTTPForm";
import SignupForm from "../forms/SignupForm";
import Redirect from "../forms/Redirect";

const Container = styled.div`
  width: 30rem;
  height: 100%;
  background: white;
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: -3px 0 1px rgba(0, 0, 0, 0.1);
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1);
`;

const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: none;
  cursor: pointer;
  transform: scale(1.5);
  color: gray;
`;

export default function ConfigMenu({ node }) {
  const { handleMenu, handleConfig, data, handleUpdateData } =
    useContext(AppContext);

  function handleClose() {
    handleMenu();
    handleConfig(null);
  }

  function handleOnSubmit(response) {
    return (event) => {
      event.preventDefault();
      const newData = {
        ...data,
        nodes: {
          ...data.nodes,
          [node.id]: {
            ...data.nodes[node.id],
            inputs: response,
          },
        },
      };
      checkInputs(response, newData);
    };
  }

  function checkInputs(obj, newData) {
    const values = Object.keys(obj).map((key) => obj[key]);
    const result = values.some((item) => item === "");
    if (!result) {
      handleUpdateData(newData);
      localStorage.setItem('nodeApp', JSON.stringify(newData))
      handleMenu();
    } else {
      alert("did you miss something?");
    }
  }

  return (
    <Container>
      <Head>
        <h2>{node.content}</h2>
        <Close onClick={handleClose}>
          <AiOutlineClose />
        </Close>
      </Head>
      {node.content === "HTTP trigger" && (
        <HTTPForm onSubmit={handleOnSubmit} />
      )}
      {node.content === "Sign up Page" && (
        <SignupForm onSubmit={handleOnSubmit} />
      )}
      {node.content === "Redirect user" && (
        <Redirect onSubmit={handleOnSubmit} />
      )}
    </Container>
  );
}
