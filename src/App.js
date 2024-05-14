import "./App.css";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        hello
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </header>
      <main>
        <Routes></Routes>
      </main>
    </div>
  );
}
export default App;
