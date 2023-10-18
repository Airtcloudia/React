import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./Message";

const Hello = () => {
  return (
    <>
      <h2>Hello, World!</h2>
      <Message />
    </>
  );
};

export default Hello;
