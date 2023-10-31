import React from "react";
import styled from "styled-components";
import Node from "../Node/Node";
import { Droppable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../Droppable/Drop";

const Container = styled.div`
  width: max-content;
  min-height: 100;
  padding: 0.5rem;
`;

const Main = styled.div`
  width: 100%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.03);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default function Canvas({ canvas, nodes }) {
  return (
    <Main>
      <StrictModeDroppable droppableId={canvas.id}>
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {nodes.map((node, index) => (
              <Node index={index} key={node.id} node={node} />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </StrictModeDroppable>
    </Main>
  );
}
