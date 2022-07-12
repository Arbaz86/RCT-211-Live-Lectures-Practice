import "./App.css";
import { useFetch } from "./Hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.github.com/search/users?q=masai"
  );

  return (
    <div className="App">
      {loading && "loading..."}
      {data.length > 0 &&
        data.map((item) => <div key={item.id}>{item.login}</div>)}
    </div>
  );
}

export default App;
