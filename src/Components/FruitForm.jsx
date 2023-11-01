import { push, ref, set } from "firebase/database";
import { realTimeDatabase } from "../firebase";
import { useState } from "react";

const REALTIME_DATABASE_KEY = "fruits";

export default function FruitForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const writeData = () => {
    const fruitListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);
    const newFruitRef = push(fruitListRef);

    set(newFruitRef, {
      name: name,
      description: description,
      date: new Date().toLocaleTimeString(),
    });

    setName("");
    setDescription("");
  };
  return (
    <div>
      <h1>Fruit Form</h1>

      <label>Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Insert Fruit Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Description</label>
      <br />
      <input
        type="text"
        name="description"
        value={description}
        placeholder="Insert Fruit Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={writeData}>Submit Data</button>
    </div>
  );
}
