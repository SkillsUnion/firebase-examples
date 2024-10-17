import "./App.css";
import FruitForm from "./Components/FruitForm";
import FruitList from "./Components/FruitList";
import { useState, useEffect } from "react";
import AuthForm from "./Components/AuthForm";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      }
    });
  }, []);

  return (
    <>
      <h1>Fruit </h1>
      <div className="card">
        {isLoggedIn ? <h2>Welcome back {user.email}</h2> : null}
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
              signOut(auth);
              setUser({});
            }}
          >
            Logout!
          </button>
        ) : null}

        {isLoggedIn ? <FruitForm /> : <AuthForm />}

        <FruitList />
      </div>
    </>
  );
}

export default App;
