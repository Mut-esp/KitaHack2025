import React, { ReactNode } from "react";

interface ChatboxProps {
  isLeft?: boolean;
  bgColor?: string;
  children: ReactNode;
}

export default function Chatbox({ isLeft = false, bgColor = "blue", children }: ChatboxProps) {
  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"} my-2`}>
      <div
        className={`rounded-lg p-3 max-w-xs ${isLeft ? "left-chatbox" : "right-chatbox"} common-style`}
        style={{ backgroundColor: bgColor }}
      >
        {children}
        <div className={`${isLeft ? "left-tail" : "right-tail"}`} />
      </div>
    </div>
  );
}
