import { useState, useCallback } from 'react';
import { useEdgesState } from 'react-flow-renderer';
import AndNode from '@/components/Nodes/AndNode';
import OrNode from '@/components/Nodes/OrNode';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  Background,
  MiniMap,
  Controls,
  useNodesState
} from 'reactflow';
import NandNode from '@/components/Nodes/NandNode';
import XorNode from '@/components/Nodes/XorNode';
import XnorNode from '@/components/Nodes/XnorNode';
import NotNode from '@/components/Nodes/NotNode';
import NorNode from '@/components/Nodes/NorNode';

type Props = {};

const initialNodes: Node[] = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 }, type: "and"},
  { id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 }, type: "or" },
  { id: '3', data: {label : 'Node 3'}, position: {x : 20, y : 5}, type : "nand"},
  { id: '4', data: {label : 'Node 4'}, position: {x : 20, y : 5}, type : "xor"},
  { id: '5', data: {label : 'Node 5'}, position: {x : 20, y : 5}, type : "xnor"},
  { id: '6', data: {label : 'Node 6'}, position: {x : 20, y : 5}, type : "not"},
  { id: '7', data: {label : 'Node 7'}, position: {x : 20, y : 5}, type : "nor"}

];


const initialEdges: Edge[] = [
  /*
  { id: 'e1-2', source: '1', target: '2'},
  { id: 'e1-3', source: '1', target: '3'}
  */
];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
  includeHiddenNodes : true
};


const nodeTypes = {
  and : AndNode,
  or : OrNode,
  nand : NandNode,
  xor : XorNode,
  xnor : XnorNode,
  not : NotNode,
  nor : NorNode
}


export default function DashboardStartView({}: Props) {
  const [nodes, ,onNodesChange] =useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      fitViewOptions={fitViewOptions}
      nodeTypes = {nodeTypes}
    >
      <Controls />
      <Background/>
    </ReactFlow>

  );


}
