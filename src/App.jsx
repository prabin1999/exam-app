import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Machinetest from "./Components/Machinetest/Machinetest";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Machinetest />
      <Sidebar />
    </>
  );
}

export default App;
