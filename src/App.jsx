import { useSelector } from "react-redux";
import Component from "./components/Component";
import Component2 from "./components/component2";

function App() {
  const counter = useSelector((state) => state.count);
  return (
    <div className="App">
      <Component />
      <Component2/>
    </div>
  );
}

export default App;
