import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogicSimulator from "@/assets/vectors/LogicSimulator.svg";
import XOR from "@/assets/vectors/gates/XOR.svg";
import io from "socket.io-client";
import { useMouse } from "react-use";
import { v4 as uuidv4 } from "uuid";

const socket = io("ws://localhost:8080/");

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashobardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  & .mouse {
    width: 50px;
    height: 50px;
    background-color: green;
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
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [mouse, setMouse] = useState([0, 0]);
  const [userID, setUserID] = useState(null);
  const [users, setUsers] = useState<MouseMoveEvent[]>([]);

  const ref = React.useRef(null);

  const { docX, docY } = useMouse(ref);

  useEffect(() => {
    setMouse([docX, docY]);
    socket.emit("mouseMove", { x: docX, y: docY, id: userID });
  }, [docX, docY]);

  useEffect(() => {
    const userID = uuidv4();
    setUserID(userID);
    socket.on("connect", () => {
      setIsConnected(true);
      socket.emit("mouseMove", { x: docX, y: docY, id: userID });

      console.log("COMNMECTED");
    });

    socket.on("mouseMove", (data: MouseMoveEvent) => {
      console.log("COMNMECTED_MOUSEMOVED", data);
      console.log(data.userID === userID);
      if (data.userID !== userID) {
        setUsers((users) => [...users, data]);
      }
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
          <LogicGate /> <LogicGate />
        </div>
      </DashboardSideBar>
      <DashboardContentWrapper>{children}</DashboardContentWrapper>
      {users.map((user) => {
        return (
          <div
            style={{
              left: user.x,
              top: user.y,
            }}
            className="mouse"
          >
            <h1>{user.userID}</h1>
          </div>
        );
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

const LogicGate = () => {
  return (
    <LogicGateWrapper draggable>
      <img src={XOR} width={"100px"} />
    </LogicGateWrapper>
  );
};