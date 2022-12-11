import { memo } from "react";
import { Handle, NodeProps, Position} from "reactflow";
import "./NodeStyle.css"

const HandleInput1Style = {top : 54.5};
const HandleOutputStyle = {top : 53.5}

const NotNode = ({
  data,
  isConnectable,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}: NodeProps) => {
  
  targetPosition = Position.Left;
  sourcePosition = Position.Right;
  return (
    <div className=  "not-node-div">
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
        style = {HandleInput1Style}
        id= "input1"
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

export default NotNode;