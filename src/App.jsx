import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { PlayArea } from "./components/PlayArea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <PlayArea />
    </>
  );
}

export default App;
