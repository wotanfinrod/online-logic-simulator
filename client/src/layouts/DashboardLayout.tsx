import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogicSimulator from "@/assets/vectors/LogicSimulator.svg";
import AND from "@/assets/vectors/gates/AND.svg";
import OR from "@/assets/vectors/gates/OR.svg";
import NAND from "@/assets/vectors/gates/NAND.svg";
import XOR from "@/assets/vectors/gates/XOR.svg";
import NOR from "@/assets/vectors/gates/NOR.svg";
import NOT from "@/assets/vectors/gates/NOT.svg";
import XNOR from "@/assets/vectors/gates/XNOR.svg";

import io from "socket.io-client";
import { useMouse } from "react-use";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addNewMovedUser,
  setCurrentUsersPosition,
} from "@/store/features/users/user.slice";
import Cursor from "@/components/icons/Cursor";

import { monitorEventLoopDelay } from "perf_hooks";

const socket = io("ws://localhost:8080/");

interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface LogicGateProps{
  gateId : number;
  gate : string;
}

const DashobardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  & .mouse {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
  }
`;

const DashboardSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: #dddddd;
  padding: 10px;
  flex: 1;
  & .logo-container {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    border-bottom: 2px solid gray;
  }
  & .gate-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const DashboardContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 5;
`;
type MouseMoveEvent = {
  x: number;
  y: number;
  userID: string;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const users = useAppSelector((state) => state.user.movedUsers);
  const dispatch = useAppDispatch();
  const ref = React.useRef(null);

  const { docX, docY } = useMouse(ref);

  useEffect(() => {
    dispatch(
      setCurrentUsersPosition({ x: docX, y: docY, userID: currentUser.userID })
    );
    socket.emit("mouseMove", { x: docX, y: docY, userID: currentUser.userID });
  }, [docX, docY]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("mouseMove", { x: docX, y: docY, userID: currentUser.userID });

      console.log("COMNMECTED");
    });

    socket.on("mouseMove", (data: MouseMoveEvent) => {
      //console.log("COMNMECTED_MOUSEMOVED", data);
      dispatch(addNewMovedUser(data));
    });
  }, []);

  return (
    <DashobardWrapper ref={ref}>
      <DashboardSideBar>
        <div className="logo-container">
          <img width={100} src={LogicSimulator} />
        </div>
        <h4>Tools</h4>
        <div className="gate-wrapper">
          <LogicGate gate= {AND}  gateId= {0} />
          <LogicGate gate= {OR} gateId= {1}/>
          <LogicGate gate= {NAND} gateId= {2}/>
          <LogicGate gate= {XOR} gateId= {3}/>
          <LogicGate gate= {XNOR} gateId= {4}/>
          <LogicGate gate= {NOT} gateId= {5}/>
          <LogicGate gate= {NOR} gateId= {6}/>
        </div>
      </DashboardSideBar>
      <DashboardContentWrapper>{children}</DashboardContentWrapper>
      {users.map((user) => {
        if (user.userID !== currentUser.userID) {
          console.log(user)
          console.log(currentUser)
          return (
            <div
              style={{
                left: user.x,
                top: user.y,
              }}
              className="mouse"
            >
              <Cursor />
            </div>
          );
        }
      })}
    </DashobardWrapper>
  );
}

const LogicGateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 18px;
  background-color: #c4c4c4;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    background-color: #a19e9e;
  }
`;



const LogicGate = ({gate, gateId} : LogicGateProps) => {
  const OnDragStart = (event: { dataTransfer: { setData: (arg0: string, arg1: any) => void; effectAllowed: string; }; }, gateId: number) => {
    event.dataTransfer.setData('application/reactflow', gateId);
    event.dataTransfer.effectAllowed = 'move';
  }
    return (
    <LogicGateWrapper>
      <img
         onDragStart={(event) => OnDragStart(event, gateId)} draggable
         src={gate}
         width={"100px"}
      />
    </LogicGateWrapper>
  );
}