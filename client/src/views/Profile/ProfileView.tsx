import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background: #ffffff;
  border: 1.5px solid #d9d9d9;
  border-radius: 10px;
  min-height: 150px;
  margin-top: 20px;
`;
export default function ProfileView({}: Props) {
  let { username } = useParams(); // Unpacking and retrieve id

  return <Card>user: {username}</Card>;
}
