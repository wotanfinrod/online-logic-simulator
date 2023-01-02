import { useState, useCallback, useEffect, useRef, LegacyRef } from 'react';
import {useMouse} from 'react-use'
import { ReactFlowProvider, useEdgesState } from 'react-flow-renderer';
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
import { ReactFlowInstance } from 'react-flow-renderer';
import { useDrop } from 'react-dnd';
import { string } from 'zod';
import styled from 'styled-components';
import './DashboardStartView.css'

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

const wrapperStyle =
{
  width: "100%",
  height: "100%"
}


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

const nodeNums = ["and", "or", "nand", "xor", "xnor", "not", "nor"];

const nodeTypes = {
  and : AndNode,
  or : OrNode,
  nand : NandNode,
  xor : XorNode,
  xnor : XnorNode,
  not : NotNode,
  nor : NorNode
}

type MousePos = {x:number, y:number};


export default function DashboardStartView({}: Props) {
  const [nodes,setNodes ,onNodesChange] =useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [mousePos, setMousePos] = useState<MousePos>();
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "gate",
    drop: (event,monitor ) => addNewNodeToBoard(event, monitor.getSourceClientOffset()),
    collect: (monitor) => ({
      isOver : !!monitor.isOver()
    })  
  }))

  
  const addNewNodeToBoard = (event,locations) => {
    const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();

    setNodes((nodes) =>{
      console.log(nodes);
      return[
        ...nodes,
        {
          id: Math.floor(Math.random()*10000).toString(),
          type: nodeNums[event.id],
          position: {x: locations.x - reactFlowBounds?.left, y: locations.y- reactFlowBounds?.top},
          data:{label: ""}
        }
      ]
    });


    //const nodeTemplate = nodeTypes[nodeNums[id]];
    


    //console.log(nodeTemplate);

  }

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <ReactFlowProvider>
    <div className='reactflow-wrapper' ref={reactFlowWrapper} style={wrapperStyle}>
    <ReactFlow
      ref={drop}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit = {setReactFlowInstance}
      fitView
      fitViewOptions={fitViewOptions}
      nodeTypes = {nodeTypes}
    >
      <Controls />
      <Background/>
    </ReactFlow>
    </div>
    </ReactFlowProvider>


  );


}
