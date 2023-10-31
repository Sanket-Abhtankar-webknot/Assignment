import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AppContext } from "../../App";
import { ANode, HBlock, RBlock, SBlock } from "../../Utils/styled";
import { TbWorldShare } from "react-icons/tb";
import { RiShieldUserFill } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";

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
          {node.content === "HTTP trigger" && (
            <HBlock>
              <TbWorldShare style={{ transform: "scale(1.5)" }} />
            </HBlock>
          )}
          {node.content === "Redirect user" && (
            <RBlock>
              <BsFillSendFill style={{ transform: "scale(1.5)" }} />
            </RBlock>
          )}
          {node.content === "Sign up Page" && (
            <SBlock>
              <RiShieldUserFill style={{ transform: "scale(1.5)" }} />
            </SBlock>
          )}
          {node.content}
        </ANode>
      )}
    </Draggable>
  );
}
