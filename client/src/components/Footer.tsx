import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <h4>© {new Date().getFullYear()} JelyLabs. All rights reserved.</h4>
    </div>
  );
}
