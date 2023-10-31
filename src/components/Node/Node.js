import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { AppContext } from "../../App";

const ANode = styled.div`
  width: 10rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 700;
  margin: 1rem;
`;

export default function Node({ node, index }) {
  const { handleMenu, handleConfig } = useContext(AppContext);

  function handleOnNodeClick() {
    handleMenu();
    handleConfig(node);
  }
  return (
    <Draggable draggableId={node.id} index={index}>
      {(provided) => (
        <ANode
          onClick={handleOnNodeClick}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {node.content}
        </ANode>
      )}
    </Draggable>
  );
}
