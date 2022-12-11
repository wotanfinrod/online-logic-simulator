import { memo } from "react";
import { Handle, NodeProps, Position, Background, XYPosition } from "reactflow";
import styled from "styled-components";
import "./AndNode.css"

const HandleInput1Style = {top : 12};
const HandleInput2Style = {top : 105};


const AndNode = ({
  data,
  isConnectable,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}: NodeProps) => {
  
  targetPosition = Position.Left;
  sourcePosition = Position.Right;
  return (
    <div className=  "and-node-div">
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
        style = {HandleInput1Style}
      />
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
        style = {HandleInput2Style}
      />
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default AndNode;