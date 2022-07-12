import "./App.css";
import { useTimeout } from "./Hooks/useTimeout";

function App() {
  const ready = useTimeout();

  return (
    <div className="App">
      <h3>Timeout</h3>
      <div>{ready ? "ready" : "not ready"}</div>
    </div>
  );
}

export default App;
