import { memo } from "react";
import { Handle, NodeProps, Position} from "reactflow";
import "./NodeStyle.css"

const HandleInput1Style = {top : 11};
const HandleInput2Style = {top : 104};
const HandleOutputStyle = {top : 58.5}

const NorNode = ({
  data,
  isConnectable,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}: NodeProps) => {
  
  targetPosition = Position.Left;
  sourcePosition = Position.Right;
  return (
    <div className=  "nor-node-div">
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
        style = {HandleInput1Style}
        id= "input1"
      />
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
        style = {HandleInput2Style}
        id = "input2"
      />
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
        style = {HandleOutputStyle}
      />
    </div>
  );
};

export default memo(NorNode);