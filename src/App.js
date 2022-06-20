import "./App.css";
import People from "./components/People";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <h1>React with Zustand - state management demo</h1>
      <p>People</p>
      <Input />
      <People />
    </div>
  );
}

export default App;
