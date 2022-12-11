import { useState, useCallback } from 'react';
import { useEdgesState } from 'react-flow-renderer';
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

type Props = {};

const initialNodes: Node[] = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 }, type: "input" },
  { id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
  { id: '3', data: {label : 'Node 3'}, position: {x : 20, y : 5}}
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated : true },
  { id: 'e1-3', source: '1', target: '3'}
];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
  includeHiddenNodes : true
};


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
    >
      <Controls />

    </ReactFlow>

  );


}
