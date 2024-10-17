import "./App.css";
import FruitForm from "./Components/FruitForm";
import FruitList from "./Components/FruitList";

function App() {
  return (
    <>
      <h1>Fruit </h1>
      <div className="card">
        <FruitForm />
      </div>
      <FruitList />
    </>
  );
}

export default App;
