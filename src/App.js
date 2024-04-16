import "./JavaScriptLessons";
import "./App.css";
import "./modules/Home";
import CounterComponent from "./counterComponent";
import ListComponent from "./ListComponent";
import RenderComponent from "./RenderComponent";
import MyClassComponent from "./MyClassComponent";
import { useState } from "react";

function App() {
  const [isShowTimer, setIsShowTimer] = useState(false);
  return (
    <div>
      <header>
        {isShowTimer ? <MyClassComponent /> : <ListComponent />}
        <button onClick={() => setIsShowTimer((prev) => !prev)}>
          Show Timer
        </button>
        {/* <RenderComponent />
        <CounterComponent /> */}
      </header>
    </div>
  );
}
// when adding new elements, it is only that new element that updates on the page, the whole page does not need to reload.
export default App;
